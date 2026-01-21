// HVAC Flow (v30) - Service path + sizing + pricing (min/max ranges)
window.HWA_FLOWS = window.HWA_FLOWS || {};

(function(){
  const clamp = (n, a, b)=>Math.max(a, Math.min(b, n));
  const toNum = (v)=>{ const x = Number(String(v||'').replace(/[^\d.]/g,'')); return isFinite(x)?x:0; };

  const BASE_SQFT_PER_TON = 650;

  const tonFromSqft = (sqft)=>{
    const raw = Math.ceil(sqft / BASE_SQFT_PER_TON);
    return clamp(raw, 1, 5);
  };

  const furnaceBtuFromSqft = (sqft)=>{
    if (sqft <= 1400) return 40000;
    if (sqft <= 2200) return 60000;
    if (sqft <= 3000) return 80000;
    if (sqft <= 3800) return 100000;
    return 120000;
  };

  const comboKeyFromTonBtu = (ton, btu)=>{
    if (ton <= 2) return '2-ton_60000';
    if (ton === 3) return '3-ton_80000';
    if (ton === 4) return '4-ton_100000';
    return '5-ton_120000';
  };

  const makePkgId = (kind,key,tier)=>('hvac_pkg_' + kind + '_' + key + '_' + tier).replace(/[^\w-]/g,'_');

  const computeSizing = (a)=>{
    const sqftTotal = toNum(a.sqft_total);
    const unitsRaw = String(a.units_count||'1');
    const units = (unitsRaw === '3') ? 3 : Number(unitsRaw||1);
    const perUnitSqft = sqftTotal && units ? sqftTotal / units : 0;

    let adj = perUnitSqft;

    if ((a.basement||'no') === 'unfinished') adj *= 1.05;

    const tightness = a.tightness || 'typical';
    if (tightness === 'leaky') adj *= 0.92;
    if (tightness === 'tight') adj *= 1.08;

    const sun = a.sun_exposure || 'average';
    if (sun === 'high') adj *= 0.95;
    if (sun === 'low') adj *= 1.03;

    const ceilings = a.ceilings || '8';
    if (ceilings === '9') adj *= 0.97;
    if (ceilings === '10') adj *= 0.94;

    const insulation = a.insulation || 'average';
    if (insulation === 'poor') adj *= 0.92;
    if (insulation === 'good') adj *= 1.06;

    const ton = tonFromSqft(adj || 0);
    const btu = furnaceBtuFromSqft(adj || 0);
    return { sqftTotal, units, adj, ton, btu };
  };

  window.HWA_FLOWS.hvac = {
    id: "hvac",
    badge: "HVAC Guide",
    subtitle: "Choose: new system estimate, tune-up, or repair. Get recommended items you can remove before adding to cart.",
    steps: [
      {
        id: "hvac_intent",
        title: "What do you need help with?",
        blocks: [
          { type:"callout", title:"Quick note", body:"If you select New system, the guide gives a rough size and estimate range. Final sizing and pricing are confirmed after an in-home assessment." },
          { type:"video", title:"How to choose the right path", embedUrl:"https://www.youtube.com/embed/VIDEO_ID", caption:"Replace VIDEO_ID with your overview video." }
        ],
        questions: [
          { key:"hvac_goal", title:"Choose your goal", type:"single", options:[
            { value:"new", label:"New system / replacement estimate" },
            { value:"tuneup", label:"Seasonal tune-up / maintenance" },
            { value:"repair", label:"Repair / not heating or cooling" }
          ]},
          { key:"hvac_system_have", title:"What type of system do you have? (helps us recommend the right service)", type:"single",
            showIf:{ any:[{q:"hvac_goal", eq:"tuneup"},{q:"hvac_goal", eq:"repair"}] },
            options:[
              {value:"ac_furnace", label:"AC + furnace"},
              {value:"ac_only", label:"AC only"},
              {value:"furnace_only", label:"Furnace only"},
              {value:"heat_pump", label:"Heat pump"},
              {value:"not_sure", label:"Not sure"}
            ]
          }
        ]
      },

      // Tune-up path
      {
        id:"hvac_tuneup_path",
        title:"Tune-up details",
        showIf:{ q:"hvac_goal", eq:"tuneup" },
        blocks:[
          { type:"callout", title:"What a tune-up does", body:"A tune-up improves safety, airflow, and efficiency. It can catch small issues before they turn into breakdowns." }
        ],
        questions:[
          { key:"tuneup_when", title:"When do you want it done?", type:"single", options:[
            {value:"asap", label:"ASAP / next available"},
            {value:"this_week", label:"This week"},
            {value:"this_month", label:"This month"}
          ]},
          { key:"tuneup_concerns", title:"Anything you’ve noticed? (optional)", type:"multi", options:[
            {value:"noise", label:"Unusual noise"},
            {value:"weak_airflow", label:"Weak airflow"},
            {value:"hot_cold", label:"Hot/cold rooms"},
            {value:"high_bills", label:"High energy bills"},
            {value:"odor", label:"Odor / burning smell"}
          ]}
        ]
      },

      // Repair path
      {
        id:"hvac_repair_path",
        title:"Repair triage",
        showIf:{ q:"hvac_goal", eq:"repair" },
        blocks:[
          { type:"callout", title:"Safety first", body:"If you smell gas, see soot, or feel dizzy/headaches, leave the home and call your utility provider or emergency services." },
          { type:"accordion", title:"Quick checks you can do", items:[
            {q:"Thermostat", a:"Confirm mode (Heat/Cool), setpoint, and batteries."},
            {q:"Filter", a:"A clogged filter can cause freezing/overheating and weak airflow."},
            {q:"Breaker", a:"Check breaker and furnace switch (looks like a light switch)."}
          ]}
        ],
        questions:[
          { key:"repair_symptom", title:"What’s happening?", type:"single", options:[
            {value:"no_heat", label:"No heat"},
            {value:"no_cool", label:"No cooling"},
            {value:"water", label:"Water leak / drain issue"},
            {value:"noise", label:"Loud noise"},
            {value:"other", label:"Other / not sure"}
          ]},
          { key:"repair_urgent", title:"Is this an emergency?", type:"single", options:[
            {value:"yes", label:"Yes - urgent"},
            {value:"no", label:"No - standard"}
          ]}
        ]
      },

      // New system sizing path
      {
        id: "hvac_home",
        title: "Home details",
        showIf:{ q:"hvac_goal", eq:"new" },
        blocks: [
          { type:"callout", title:"Important", body:"This estimate is not a final quote. Final equipment sizing should be verified with a load calculation and an on-site assessment." },
          { type:"video", title:"Why HVAC sizing matters", embedUrl:"https://www.youtube.com/embed/VIDEO_ID", caption:"Replace VIDEO_ID with your sizing education video." }
        ],
        questions: [
          { key:"sqft_total", title:"Total finished square footage (conditioned space)", type:"number", min:200, max:20000, step:10, placeholder:"Example: 2400", help:"Include finished basements if they are heated/cooled." },
          { key:"units_count", title:"How many HVAC systems serve the home?", type:"single", options:[
            {value:"1", label:"1 system"},
            {value:"2", label:"2 systems"},
            {value:"3", label:"3+ systems"}
          ], help:"If multiple systems, we estimate per-system sizing and apply quantity." },
          { key:"basement", title:"Basement", type:"single", options:[
            {value:"no", label:"No basement"},
            {value:"finished", label:"Finished/conditioned basement"},
            {value:"unfinished", label:"Unfinished basement (adds some load)"}
          ]}
        ],
        notes: (a)=>{
          if (!toNum(a.sqft_total)) return ["Enter square footage to continue."];
          return [];
        }
      },

      {
        id:"hvac_load",
        title:"Factors that impact load",
        showIf:{ q:"hvac_goal", eq:"new" },
        blocks:[
          { type:"callout", title:"Why we ask", body:"These factors change how much heating and cooling your home needs - they help refine the rough estimate." },
          { type:"image", title:"HVAC sizing visual", src:"assets/img/illus-hvac.png", caption:"Template image - replace with your own." }
        ],
        questions:[
          { key:"tightness", title:"How would you describe the home?", type:"single", options:[
            {value:"typical", label:"Typical"},
            {value:"leaky", label:"Older/leaky (drafty, older windows/doors)"},
            {value:"tight", label:"Newer/tight (good insulation, newer windows)"}
          ]},
          { key:"insulation", title:"Insulation / window quality", type:"single", options:[
            {value:"average", label:"Average"},
            {value:"poor", label:"Poor"},
            {value:"good", label:"Good"}
          ]},
          { key:"sun_exposure", title:"Sun exposure (esp. west-facing windows)", type:"single", options:[
            {value:"average", label:"Average"},
            {value:"high", label:"High sun exposure"},
            {value:"low", label:"Low sun exposure"}
          ]},
          { key:"ceilings", title:"Typical ceiling height", type:"single", options:[
            {value:"8", label:"8 ft"},
            {value:"9", label:"9 ft"},
            {value:"10", label:"10+ ft"}
          ]}
        ]
      },

      {
        id:"hvac_replace",
        title:"What are you replacing?",
        showIf:{ q:"hvac_goal", eq:"new" },
        blocks:[
          { type:"callout", title:"Tip", body:"If you’re unsure, choose Full system and we’ll estimate both heating and cooling together." }
        ],
        questions:[
          { key:"replace_type", title:"Select what you want pricing for", type:"single", options:[
            {value:"ac", label:"Straight AC (cooling only)"},
            {value:"furnace", label:"Furnace only"},
            {value:"full", label:"Full system (AC + furnace)"},
            {value:"heatPump", label:"Heat pump"},
            {value:"dualFuel", label:"Dual-fuel (heat pump + furnace)"}
          ]},
          { key:"furnace_eff", title:"If a furnace is included, which efficiency?", type:"single",
            showIf:{ any:[{q:"replace_type", eq:"furnace"},{q:"replace_type", eq:"full"},{q:"replace_type", eq:"dualFuel"}] },
            options:[ {value:"80", label:"80%+ (standard)"},{value:"90", label:"90%+ (high efficiency)"} ]
          },
          { key:"tier", title:"Choose your package level", type:"single", options:[
            {value:"basic", label:"Standard"},
            {value:"mid", label:"Enhanced"},
            {value:"high", label:"Ultimate"}
          ]}
        ]
      },

      {
        id:"hvac_review",
        title:"Recommended options",
        isReview: true,
        blocks:[
          { type:"callout", title:"Before you add to cart", body:"Remove anything you don’t want from the recommendation list, then add the rest to cart." }
        ],
        compute:(a)=>{
          const include = [];
          const notes = [];
          const explainers = [];

          // Tune-up recommendations
          if (a.hvac_goal === 'tuneup'){
            const sys = a.hvac_system_have || 'not_sure';
            if (sys === 'ac_only') include.push({id:'hvac_ac_tuneup', qty:1});
            if (sys === 'furnace_only') include.push({id:'hvac_furnace_tuneup', qty:1});
            if (sys === 'heat_pump') include.push({id:'hvac_ac_tuneup', qty:1}); // placeholder until HP tune-up item exists
            if (sys === 'ac_furnace') { include.push({id:'hvac_ac_tuneup', qty:1}); include.push({id:'hvac_furnace_tuneup', qty:1}); }
            if (sys === 'not_sure') include.push({id:'hvac_system_diagnostic', qty:1});
            notes.push("Tune-ups improve safety, airflow, and efficiency. If issues are found, we’ll show repair options before work is done.");
            explainers.push({ title:"What’s included", body:"We check safety controls, clean key components, verify airflow/temperature rise, and confirm refrigerant performance where applicable." });
            return { include, notes, explainers };
          }

          // Repair recommendations
          if (a.hvac_goal === 'repair'){
            include.push({id:'hvac_system_diagnostic', qty:1});
            if (a.repair_urgent === 'yes') notes.push("Marked as urgent - scheduling priority may be higher based on availability.");
            notes.push("Diagnostic identifies the root cause and provides repair options before work is done.");
            explainers.push({ title:"Why diagnostic first", body:"Repairs vary widely (electrical, control boards, motors, refrigerant, ignition, drains). The diagnostic confirms the correct fix." });
            return { include, notes, explainers };
          }

          // New system recommendations
          const s = computeSizing(a);
          const systemType = a.replace_type || "full";
          const eff = a.furnace_eff || "80";
          const tier = a.tier || "basic";

          let kind = systemType;
          if (systemType === "furnace") kind = (eff === "90") ? "furnace90" : "furnace80";
          if (systemType === "full") kind = (eff === "90") ? "full90" : "full80";
          if (systemType === "dualFuel") kind = (eff === "90") ? "dualFuel90" : "dualFuel80";

          let key = `${s.ton}-ton`;
          if (kind.startsWith("furnace")) key = String(s.btu);
          if (kind.startsWith("full") || kind.startsWith("dualFuel")) key = comboKeyFromTonBtu(s.ton, s.btu);

          const id = makePkgId(kind, key, tier);
          const qty = (s.units && s.units > 1) ? s.units : 1;
          include.push({ id, qty });

          if (!s.sqftTotal) notes.push("Enter square footage to generate sizing and pricing.");
          else {
            notes.push(`Estimated conditioned area per system: ~${Math.round(s.adj)} sqft.`);
            notes.push(`Rough cooling size: ${s.ton} ton per system.`);
            if (systemType !== "ac" && systemType !== "heatPump") notes.push(`Rough heating size: ${s.btu.toLocaleString()} BTU per system.`);
            notes.push(`System count: ${s.units} (adds quantity).`);
          }

          explainers.push(
            { title:"How this estimate works", body:`We start with ~${BASE_SQFT_PER_TON} sqft per ton, then adjust based on your answers. Final sizing requires a load calculation and an in-home visit.` },
            { title:"What can change final pricing", body:"Electrical upgrades, duct/return modifications, venting/condensate changes, refrigerant line condition, permitting, and equipment compatibility." }
          );

          return { include, notes, explainers };
        }
      }
    ]
  };
})();