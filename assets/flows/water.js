(function(){
  const Flow = {
    id:"water",
    badge:"Water guide",
    subtitle:"Taste, hardness, staining, and safety",
    title:"Water Quality Guide",
    steps:[
      { id:"w_intro",
        title:"Water quality plan builder",
        lead:"This guide teaches as you go. We’ll identify problems, explain what they usually mean, and build a best-fit bundle with pricing.",
        blocks:[
          {type:"callout", title:"What you’ll get", body:"A recommended water bundle (test + treatment) and a clear explanation of why each item is included."},
          {type:"video", title:"Utah water: hardness + treatment basics", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"accordion", items:[
            {q:"Do I need a water test?", a:"If you want a correct solution, yes. Even a simple baseline test helps confirm hardness, chlorine, and sediment."},
            {q:"Will a softener make drinking water better?", a:"It improves whole-home scale/soap performance. For drinking taste and dissolved contaminants, RO is usually the bigger change."}
          ]}
        ],
        questions:[
          {key:"w_goal", type:"single", title:"What’s your main goal?", options:[
            {value:"taste", label:"Better drinking water taste"},
            {value:"protect", label:"Protect plumbing from scale"},
            {value:"both", label:"Both taste and protection"},
            {value:"safety", label:"Stronger contaminant reduction plan"}
          ]},
          {key:"w_source", type:"single", title:"Water source", options:[
            {value:"city", label:"City/municipal"},
            {value:"well", label:"Private well"},
            {value:"unknown", label:"Not sure"}
          ]}
        ],
        side:[
          {title:"Biggest homeowner wins", body:"Most people feel the biggest improvement from (1) soft water for showers and fixtures and (2) RO for drinking taste."}
        ]
      },

      { id:"w_symptoms",
        title:"Step 1: Symptoms checklist",
        lead:"Choose what you notice - we’ll map these to causes and solutions.",
        blocks:[
{type:"callout", title:"What these symptoms usually mean", body:"Water issues tend to show up as taste/odor, scaling, staining, dryness, or appliance wear. The goal here is to narrow to the most likely cause so you don’t over-buy."},
{type:"checklist", title:"Quick homeowner checks", items:[
  "Is the issue at every faucet or just one?",
  "Cold water only, hot water only, or both?",
  "Does it change after a filter change or after rain/snowmelt?",
  "Any new plumbing work, softener changes, or well service recently?"
]},
{type:"video", title:"How to recognize common water problems", caption:"Short walkthrough of the most common Utah water symptoms (taste/odor, scale, staining).", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"text", html:"<div class='tile'><strong>Tip</strong><p>If you’re unsure, pick the closest match. The final step can mark items as “confirm in home”.</p></div>"}
        ],
        questions:[
          {key:"w_symptoms", type:"multi", title:"What water issues do you notice?", options:[
            {value:"chlorine", label:"Chlorine taste/odor", meta:"Drinking water smell or taste"},
            {value:"scale", label:"Scale buildup", meta:"White crust on fixtures, showerheads"},
            {value:"spotting", label:"Spots on dishes/glass", meta:"Hardness minerals"},
            {value:"stains", label:"Staining", meta:"Toilets/sinks discoloration"},
            {value:"sediment", label:"Sediment / grit", meta:"Particles in faucet or tub"},
            {value:"dryskin", label:"Dry skin after showers", meta:"Hardness + dry air"},
            {value:"cloudy", label:"Cloudy water", meta:"Often sediment or aeration"},
            {value:"concern", label:"Health concerns / unknown", meta:"Want more reduction and confidence"}
          ]}
        ],
        side:[
          {title:"What symptoms usually mean", body:"Scale/spotting points strongly to hardness. Chlorine points to disinfection. Sediment points to particulates that should be filtered early."}
        ]
      },

      { id:"w_causes",
        title:"Step 2: Likely causes (education)",
        lead:"These are the most common root causes behind your selected symptoms.",
        blocks:[
{type:"callout", title:"Why we ask about source and plumbing", body:"Municipal and well water can have different patterns. Plumbing materials and water-heater conditions also change taste and staining. This step helps separate supply issues from in-home issues."},
{type:"accordion", items:[
  {q:"Hardness vs sediment - what’s the difference?", a:"Hardness is dissolved minerals (calcium/magnesium) that create scale. Sediment is physical particles that cause cloudiness/grit and can clog fixtures."},
  {q:"Chlorine smell - is that dangerous?", a:"Chlorine is commonly used for disinfection. Many people prefer to remove it for taste/odor and to reduce skin/hair dryness. We match the solution to your goals."},
  {q:"Rotten egg smell (sulfur) - what causes it?", a:"Often from hydrogen sulfide in the water supply or reactions in the water heater. Treatment depends on whether it is cold water, hot water, or both."}
]},
{type:"video", title:"Source water basics (city vs well)", caption:"Explains what changes between municipal and well water and what filters/softeners actually do.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"checklist", title:"Common causes", items:[
            "<strong>Hardness</strong>: calcium/magnesium minerals that cause scale and reduce soap performance.",
            "<strong>Sediment</strong>: sand/rust/pipe debris that clogs fixtures and appliances.",
            "<strong>Chlorine</strong>: normal municipal disinfection (safe, but affects taste and showers).",
            "<strong>Other contaminants</strong>: dissolved solids, metals, or well-specific concerns that need testing and targeted treatment."
          ]},
          {type:"video", title:"How a water softener actually helps", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"accordion", items:[
            {q:"Does carbon remove hardness?", a:"No. Carbon improves taste/odor and some chemicals. Softening handles hardness."},
            {q:"Is RO whole-home?", a:"Typically no. RO is usually for drinking water (kitchen tap) because it’s more expensive to do whole-home."}
          ]}
        ],
        questions:[
          {key:"w_priority", type:"single", title:"How aggressive should the plan be?", help:"This affects whether we add extra layers (carbon + RO + UV).", options:[
            {value:"basic", label:"Basic - address the obvious"},
            {value:"balanced", label:"Balanced - comfort + protection + taste"},
            {value:"strong", label:"Strong - prioritize contaminant reduction"}
          ]}
        ]
      },

      { id:"w_usage",
        title:"Step 3: Household usage and sizing clues",
        lead:"Sizing affects performance, maintenance, and warranty outcomes.",
        blocks:[
          {type:"callout", title:"Sizing note", body:"If hardness is unknown, we recommend a safe baseline and confirm during the visit."}
        ],
        questions:[
          {key:"w_people", type:"single", title:"People in the home", options:[
            {value:"1-2", label:"1-2"},
            {value:"3-4", label:"3-4"},
            {value:"5+", label:"5+"}
          ]},
          {key:"w_hardness", type:"single", title:"Do you know hardness (gpg)?", options:[
            {value:"unknown", label:"Unknown"},
            {value:"low", label:"0-5"},
            {value:"med", label:"6-10"},
            {value:"high", label:"11-20"},
            {value:"vhigh", label:"20+"}
          ]},
          {key:"w_plumbing_age", type:"single", title:"Home plumbing age", options:[
            {value:"new", label:"Newer (0-10 years)"},
            {value:"mid", label:"10-30 years"},
            {value:"old", label:"30+ years / unknown"}
          ]}
        ]
      },

      { id:"w_drinking",
        title:"Step 4: Drinking water preferences",
        lead:"Taste and confidence usually come from a dedicated drinking-water system.",
        blocks:[
{type:"callout", title:"Drinking water focus", body:"If your main goal is great-tasting drinking and cooking water, a point-of-use system (like RO) is often the best value. We’ll still recommend protection items if symptoms suggest them."},
{type:"checklist", title:"Preferences that change the best fit", items:[
  "Do you want chilled water or dispenser compatibility?",
  "Do you want remineralization for taste?",
  "Do you prefer fewer filter changes or lowest upfront cost?"
]},
{type:"video", title:"Reverse osmosis - what it does and doesn’t do", caption:"What RO removes, what it doesn’t remove, and when a whole-home filter matters too.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"video", title:"RO explained (simple)", caption:"Replace VIDEO_ID.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},
          {type:"accordion", items:[
            {q:"Does RO waste water?", a:"Yes, some. Modern systems are more efficient, and the taste + reduction benefits are often worth it for many homeowners."},
            {q:"Do I still need carbon if I get RO?", a:"Often yes for whole-home shower taste/odor, and to protect plumbing. RO is for drinking."}
          ]}
        ],
        questions:[
          {key:"w_ro", type:"single", title:"Do you want RO for drinking water?", options:[
            {value:"yes", label:"Yes"},
            {value:"maybe", label:"Maybe - if recommended"},
            {value:"no", label:"No - whole-home only"}
          ]},
          {key:"w_cooking", type:"single", title:"Do you cook at home most days?", help:"If yes, RO has a bigger impact (coffee, soup, pasta, ice).", options:[
            {value:"yes", label:"Yes"},
            {value:"sometimes", label:"Sometimes"},
            {value:"no", label:"No"}
          ]}
        ]
      },

      { id:"w_wholehome",
        title:"Step 5: Whole-home treatment layering",
        lead:"We layer treatment in the correct order: sediment (if needed) → carbon (if needed) → softening (if needed).",
        blocks:[
{type:"callout", title:"Whole-home protection focus", body:"Whole-home treatment protects fixtures, water heater, appliances, and your shower experience. This is where softeners, sediment filtration, and carbon filtration typically belong."},
{type:"accordion", items:[
  {q:"Do I need a softener and a whole-home filter?", a:"Often, yes: softeners handle hardness/scale; carbon filters handle chlorine/taste/odor. Sediment filtration is added when particles are present."},
  {q:"Will a softener fix staining?", a:"Sometimes. Iron/manganese staining needs specific filtration. White scale rings are usually hardness-related."}
]},
{type:"video", title:"Water softener basics (scale, appliances, shower feel)", caption:"A quick explanation of how softeners work and how to choose the right capacity.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"checklist", title:"Layering order", items:[
            "Sediment first when you see grit/cloudiness or have older plumbing.",
            "Carbon when taste/odor/chlorine are a priority.",
            "Softener when hardness/scale/spotting/dry skin are priorities."
          ]}
        ],
        questions:[
          {key:"w_want_shower", type:"single", title:"Do you want showers to feel better (less dryness/odor)?", options:[
            {value:"yes", label:"Yes"},
            {value:"maybe", label:"Maybe"},
            {value:"no", label:"Not important"}
          ]},
          {key:"w_budget", type:"single", title:"Budget approach", options:[
            {value:"lowest", label:"Start with essentials"},
            {value:"mid", label:"Best value bundle"},
            {value:"top", label:"Strongest plan"}
          ]}
        ]
      },

      { id:"w_review",
        title:"Review: your water bundle",
        lead:"This is your recommended water plan with pricing. Add to cart or schedule a confirmation visit.",
        isReview:true,
        blocks:[
{type:"callout", title:"Before you add to cart", body:"You can remove any items you don’t want and still keep the rest of the bundle. If any line says Quote, that means we recommend a quick verification step before finalizing."},
{type:"video", title:"How to read your recommendation", caption:"Explains how the bundle is built and how to decide Good/Better/Best options.", embedUrl:"https://www.youtube.com/embed/VIDEO_ID"},

          {type:"callout", title:"If anything is unknown", body:"We can confirm hardness, pipe layout, and install access during the in-home visit. The bundle still gives you a strong baseline."}
        ],
        questions:[
          {key:"w_notes", type:"textarea", title:"Optional notes", help:"Any known issues (old galvanized pipe, water heater problems, basement plumbing)?"}
        ]
      }
    ],
    rules:[
      { when:{any:[{q:"w_goal", truthy:true},{q:"w_symptoms", truthy:true}]}, addProducts:["water_test"] },

      // sediment
      { when:{any:[{q:"w_symptoms", has:"sediment"},{q:"w_symptoms", has:"cloudy"},{q:"w_plumbing_age", eq:"old"}]}, addProducts:["water_sediment"],
        addExplainers:[{title:"Sediment first", body:"Sediment protection prevents clogs and protects other treatment devices. It is often the lowest-cost high-impact starting point."}] },

      // carbon
      { when:{any:[{q:"w_symptoms", has:"chlorine"},{q:"w_want_shower", in:["yes","maybe"]},{q:"w_goal", in:["taste","both","safety"]}]},
        addProducts:["water_wholehome_carbon"],
        addExplainers:[{title:"Carbon filtration", body:"Whole-home carbon improves shower and laundry experience and reduces chlorine taste/odor."}] },

      // softener
      { when:{any:[{q:"w_symptoms", has:"scale"},{q:"w_symptoms", has:"spotting"},{q:"w_symptoms", has:"dryskin"},{q:"w_goal", in:["protect","both"]}]},
        addProducts:["water_softener"],
        addNotes:["A softener is the most direct solution for scale and spotting. Proper sizing prevents frequent regeneration."],
        addExplainers:[{title:"Soft water benefits", body:"Soft water reduces scale buildup, extends appliance life, improves soap performance, and can make showers feel noticeably better."}] },

      // RO
      { when:{any:[{q:"w_ro", eq:"yes"},{q:"w_goal", in:["taste","both","safety"]},{q:"w_priority", eq:"strong"}]}, addProducts:["water_ro_system"],
        addExplainers:[{title:"RO drinking water", body:"RO is the most noticeable taste upgrade. It also reduces many dissolved contaminants for higher confidence."}] },

      // UV for well + strong
      { when:{all:[{q:"w_source", eq:"well"},{q:"w_priority", in:["balanced","strong"]}]}, addProducts:["water_uv_disinfection"],
        addExplainers:[{title:"Well disinfection layer", body:"UV can add a confidence layer for microbial concerns when paired with proper pre-filtration."}] },
    ]
  };

  window.HWA_FLOWS = window.HWA_FLOWS || {};
  window.HWA_FLOWS.water = Flow;
})();
