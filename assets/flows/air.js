(function(){
  const Flow = {
    id:"air",
    badge:"Air guide",
    subtitle:"Dust, allergies, odors, humidity, ventilation",
    title:"Air Quality Guide",
    steps:[
      { id:"a_intro",
        title:"Indoor air quality plan builder",
        lead:"This guide builds a layered plan: capture particles, reduce bypass, manage humidity, and add purification if needed.",
        blocks:[
          {type:"callout", title:"Most common failure", body:"Bypass air around the filter. Fixing the cabinet and sealing leaks often beats buying the “best” 1-inch filter."},
          {type:"video", title:"Air quality basics (simple)", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"accordion", items:[
            {q:"Will this restrict airflow?", a:"The guide prefers solutions that protect airflow (deep media filters) rather than restrictive 1-inch upgrades."},
            {q:"Do I need purification?", a:"Not always. Start with filtration and sealing. Add purification when symptoms, odors, smoke, or microbial concerns justify it."}
          ]}
        ],
        questions:[
          {key:"a_goal", type:"multi", title:"What do you want to improve?", options:[
            {value:"dust", label:"Less dust"},
            {value:"allergies", label:"Allergies/asthma"},
            {value:"pets", label:"Pets (dander)"},
            {value:"odors", label:"Odors / stale air"},
            {value:"smoke", label:"Wildfire smoke sensitivity"},
            {value:"dry", label:"Dry air / static"},
            {value:"humid", label:"Too humid / musty"}
          ]},
          {key:"a_filter", type:"single", title:"Current filter style", options:[
            {value:"1in", label:"1-inch thin filter"},
            {value:"4in", label:"4-inch media filter"},
            {value:"unknown", label:"Not sure"}
          ]},
          {key:"a_sensitivity", type:"single", title:"Sensitivity level", help:"Higher sensitivity pushes stronger filtration/purification.", options:[
            {value:"standard", label:"Standard"},
            {value:"high", label:"High (allergies/asthma)"},
            {value:"very_high", label:"Very high (immune concerns)"},
          ]}
        ]
      },

      { id:"a_particles",
        title:"Step 1: Particles - dust, dander, and filtration",
        lead:"Particles are the easiest win when you fix the filter system correctly.",
        blocks:[
          {type:"video", title:"Deep media vs 1-inch filter", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"checklist", title:"What improves particle capture most", items:[
            "Upgrade to a 4-inch media cabinet (more surface area, better airflow).",
            "Seal bypass gaps so air must pass through the filter.",
            "Replace filters on schedule (don’t wait until fully clogged)."
          ]}
        ],
        questions:[
          {key:"a_dust_level", type:"slider", title:"Dust level in the home", help:"0 = low, 10 = heavy dust buildup.", min:0, max:10, step:1, suffix:"/10"},
          {key:"a_pets_count", type:"single", title:"Pets", showIf:{any:[{q:"a_goal", has:"pets"}]}, options:[
            {value:"1", label:"1"},
            {value:"2", label:"2"},
            {value:"3+", label:"3+"}
          ]}
        ]
      },

      { id:"a_bypass",
        title:"Step 2: Bypass air and return leaks",
        lead:"If air slips around the filter, the system can circulate dust even with a premium filter.",
        blocks:[
          {type:"callout", title:"Common signs", body:"Dusty returns, whistling, filter not fitting snug, visible gaps, attic/crawlspace smell when running."},
          {type:"video", title:"Bypass air explained", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"}
        ],
        questions:[
          {key:"a_bypass_signs", type:"multi", title:"Do any of these apply?", options:[
            {value:"gaps", label:"Filter has gaps or loose fit"},
            {value:"dusty_returns", label:"Returns are dusty / black streaking"},
            {value:"attic_smell", label:"Attic/crawlspace smell when running"},
            {value:"hotcold", label:"Hot/cold rooms (possible duct issues)"},
            {value:"none", label:"None / not sure"}
          ]},
          {key:"a_duct_age", type:"single", title:"Duct system age", options:[
            {value:"new", label:"0-10 years"},
            {value:"mid", label:"10-25 years"},
            {value:"old", label:"25+ / unknown"}
          ]}
        ]
      },

      { id:"a_odors",
        title:"Step 3: Odors, smoke, and stale air",
        lead:"Odors and smoke often need layered solutions: filtration + purification + sometimes ventilation.",
        blocks:[
          {type:"video", title:"Odors vs particles", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"accordion", items:[
            {q:"Does purification replace ventilation?", a:"No. If the home is stuffy, ventilation (ERV/controlled fresh air) can be the missing piece."},
            {q:"Do air cleaners remove cooking smells?", a:"Some help, but source control and ventilation matter too."}
          ]}
        ],
        questions:[
          {key:"a_odors", type:"single", showIf:{any:[{q:"a_goal", has:"odors"},{q:"a_goal", has:"smoke"}]}, title:"How often are odors/smoke an issue?", options:[
            {value:"rare", label:"Rare"},
            {value:"weekly", label:"Weekly"},
            {value:"daily", label:"Daily"},
            {value:"seasonal", label:"Mostly seasonal (wildfires)"},
          ]},
          {key:"a_vent_interest", type:"single", title:"Do you want fresher air (ventilation)?", help:"Ventilation can reduce stale air and balance humidity.", options:[
            {value:"no", label:"No"},
            {value:"maybe", label:"Maybe / tell me if needed"},
            {value:"yes", label:"Yes"}
          ]}
        ]
      },

      { id:"a_humidity",
        title:"Step 4: Humidity control (dry vs musty)",
        lead:"Humidity affects comfort, sleep, skin, static, and even microbial growth.",
        blocks:[
          {type:"video", title:"Humidity basics", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"checklist", title:"Quick guidance", items:[
            "Winter dryness → humidifier (balanced, not over-humid).",
            "Basement musty / summer humidity → dehumidifier and/or ventilation."
          ]}
        ],
        questions:[
          {key:"a_dry_score", type:"slider", title:"Winter dryness", min:0, max:10, step:1, suffix:"/10"},
          {key:"a_musty", type:"single", title:"Musty smell or damp basement?", options:[
            {value:"no", label:"No"},
            {value:"sometimes", label:"Sometimes"},
            {value:"yes", label:"Yes"}
          ]}
        ]
      },

      { id:"a_review",
        title:"Review: your air bundle",
        lead:"This is your recommended air plan with pricing. Add to cart or schedule a visit to confirm cabinet sizing and duct conditions.",
        isReview:true,
        blocks:[
{type:"callout", title:"Before you add to cart", body:"You can remove any items you don’t want from the recommendation list. Quote-only lines mean we recommend verifying sizing or installation details before finalizing."},
{type:"video", title:"Air recommendation walkthrough", caption:"Replace VIDEO_ID with a short summary video that explains the bundle.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"callout", title:"Best outcomes", body:"Most air quality wins come from (1) a deep filter cabinet, (2) sealing bypass, and (3) adding purification only when symptoms justify it."}
        ],
        questions:[
          {key:"a_notes", type:"textarea", title:"Optional notes", help:"Any details: remodeled dust, pets, wildfire concerns, hot/cold rooms, musty basement?"}
        ]
      }
    ],
    rules:[
      // filtration upgrade if 1" or dust/allergies/pets
      { when:{any:[{q:"a_filter", eq:"1in"},{q:"a_goal", has:"dust"},{q:"a_goal", has:"allergies"},{q:"a_goal", has:"pets"}]}, addProducts:["air_4in_filter_upgrade"] },
      // bypass evaluation if signs or old ducts or comfort
      { when:{any:[{q:"a_bypass_signs", has:"gaps"},{q:"a_bypass_signs", has:"dusty_returns"},{q:"a_bypass_signs", has:"attic_smell"},{q:"a_duct_age", eq:"old"}]}, addProducts:["air_duct_seal_check"] },
      // purification when allergies/high sensitivity or odors/smoke frequent
      { when:{any:[{q:"a_sensitivity", in:["high","very_high"]},{q:"a_goal", has:"odors"},{q:"a_goal", has:"smoke"}]}, addProducts:["air_purifier_addon"] },
      { when:{any:[{q:"a_odors", in:["daily","seasonal"]}]}, addProducts:["air_reme_halo"] },
      // humidity
      { when:{any:[{q:"a_dry_score", gte:7},{q:"a_goal", has:"dry"}]}, addProducts:["air_humidifier"] },
      { when:{any:[{q:"a_musty", eq:"yes"},{q:"a_goal", has:"humid"}]}, addProducts:["air_dehumidifier"] },
      // ventilation interest
      { when:{any:[{q:"a_vent_interest", eq:"yes"},{q:"a_odors", eq:"daily"}]}, addProducts:["air_erv_ventilation"] },
    ]
  };

  window.HWA_FLOWS = window.HWA_FLOWS || {};
  window.HWA_FLOWS.air = Flow;
})();
