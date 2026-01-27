(function(){
  const Flow = {
    id: "water",
    badge: "Water guide",
    subtitle: "Taste, hardness, staining, and safety",
    title: "Water Quality Guide",
    steps: [
      {
        id: "w_intro",
        title: "Water quality plan builder",
        lead: "This guide teaches as you go. We’ll identify problems, explain what they usually mean, and build a best-fit bundle with pricing.",
        blocks: [
          { type: "callout", title: "What you’ll get", body: "A recommended water bundle (test + treatment) and a clear explanation of why each item is included." },
          { type: "video", title: "Utah water: hardness + treatment basics", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" },
          { type: "text", html: "<div class=\"visual-lg\"><img src=\"assets/img/visuals/water-layers.svg\" alt=\"Water treatment layers\"></div>" },
          { type: "text", html: "<div class=\"tile\"><strong>How the guide thinks</strong><p>Whole-home items protect plumbing and showers (sediment, carbon, softening). A drinking-water system (usually RO) is the biggest taste change.</p></div>" }
        ],
        questions: [
          { key: "w_source", type: "single", title: "Water source", options: [
            { value: "city", label: "City/municipal" },
            { value: "well", label: "Private well" },
            { value: "unknown", label: "Not sure" }
          ]},
          { key: "w_goals", type: "multi", title: "What are you trying to improve?", help: "Pick all that apply.", options: [
            { value: "taste", label: "Better drinking taste" },
            { value: "odor", label: "Less smell (chlorine/other)" },
            { value: "protect", label: "Protect plumbing/appliances" },
            { value: "showers", label: "Better showers/skin feel" },
            { value: "stains", label: "Fix staining" },
            { value: "safety", label: "Higher confidence/safety" }
          ]},
          { key: "w_priority", type: "single", title: "How strong do you want the plan to be?", help: "Stronger plans include more testing and higher-confidence layers.", options: [
            { value: "basic", label: "Basic (essentials)" },
            { value: "balanced", label: "Balanced (best value)" },
            { value: "strong", label: "Strong (highest confidence)" }
          ]}
        ],
        side: [
          { title: "Biggest homeowner wins", body: "Most people feel the biggest improvement from (1) soft water for showers and fixtures and (2) RO for drinking taste." }
        ]
      },

      {
        id: "w_symptoms",
        title: "Step 1: Symptoms checklist",
        lead: "Choose what you notice - we’ll map these to causes and solutions.",
        blocks: [
          { type: "callout", title: "What these symptoms usually mean", body: "Water issues tend to show up as taste/odor, scaling, staining, dryness, or appliance wear. The goal here is to narrow to the most likely cause so you don’t over-buy." },
          { type: "checklist", title: "Quick homeowner checks", items: [
            "Is the issue at every faucet or just one?",
            "Cold water only, hot water only, or both?",
            "Does it change after a filter change or after rain/snowmelt?",
            "Any new plumbing work, softener changes, or well service recently?"
          ]},
          { type: "video", title: "How to recognize common water problems", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" },
          { type: "text", html: "<div class='tile'><strong>Tip</strong><p>If you’re unsure, pick the closest match. The final step can mark items as confirm in-home.</p></div>" }
        ],
        questions: [
          { key: "w_symptoms", type: "multi", title: "What water issues do you notice?", options: [
            { value: "chlorine", label: "Chlorine taste/odor", meta: "Drinking water smell or taste" },
            { value: "scale", label: "Scale buildup", meta: "White crust on fixtures, showerheads" },
            { value: "spotting", label: "Spots on dishes/glass", meta: "Hardness minerals" },
            { value: "stains", label: "Staining", meta: "Toilets/sinks discoloration" },
            { value: "sediment", label: "Sediment / grit", meta: "Particles in faucet or tub" },
            { value: "dryskin", label: "Dry skin after showers", meta: "Hardness + dryness" },
            { value: "cloudy", label: "Cloudy water", meta: "Often sediment or aeration" },
            { value: "rottenegg", label: "Rotten egg smell", meta: "Often sulfur/hydrogen sulfide" },
            { value: "concern", label: "Health concerns / unknown", meta: "Want more reduction and confidence" }
          ]}
        ],
        side: [
          { title: "What symptoms usually mean", body: "Scale/spotting points strongly to hardness. Chlorine points to disinfection. Sediment points to particles that should be filtered early." }
        ]
      },

      {
        id: "w_details",
        title: "Step 2: Home + plumbing details",
        lead: "These questions help size the right solution and avoid surprises.",
        blocks: [
          { type: "callout", title: "Why we ask", body: "House size, plumbing age, and water-heater condition can change taste and staining. This step helps separate supply issues from in-home issues." },
          { type: "video", title: "Hardness vs sediment vs staining", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" }
        ],
        questions: [
          { key: "w_household", type: "single", title: "People in the home", options: [
            { value: "1-2", label: "1-2" },
            { value: "3-4", label: "3-4" },
            { value: "5+", label: "5+" }
          ]},
          { key: "w_bathrooms", type: "single", title: "Bathrooms", options: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3+", label: "3+" }
          ]},
          { key: "w_plumbing_age", type: "single", title: "Home plumbing age", options: [
            { value: "new", label: "Newer (0-10 years)" },
            { value: "mid", label: "10-30 years" },
            { value: "old", label: "30+ years / unknown" }
          ]},
          { key: "w_water_heater", type: "single", title: "Water heater age", options: [
            { value: "0-5", label: "0-5 years" },
            { value: "6-10", label: "6-10 years" },
            { value: "11+", label: "11+ years / unknown" }
          ]},
          { key: "w_stain_type", type: "single", title: "If you have staining, what color is it most often?", showIf: { any: [{ q: "w_symptoms", has: "stains" }, { q: "w_goals", has: "stains" }] }, options: [
            { value: "orange", label: "Orange/brown (often iron)" },
            { value: "black", label: "Black/purple (often manganese)" },
            { value: "blue", label: "Blue/green (often copper/corrosion)" },
            { value: "white", label: "White rings (often hardness scale)" },
            { value: "unknown", label: "Not sure" }
          ]}
        ]
      },

      {
        id: "w_causes",
        title: "Step 3: Likely causes (education)",
        lead: "These are the most common root causes behind the symptoms you selected.",
        blocks: [
          { type: "text", html: "<div><div class='tile' style='margin-top:10px;'><strong>Hardness vs sediment - what’s the difference?</strong><p>Hardness is dissolved minerals (calcium/magnesium) that create scale. Sediment is physical particles that cause cloudiness/grit and can clog fixtures.</p></div><div class='tile' style='margin-top:10px;'><strong>Chlorine smell - is that dangerous?</strong><p>Chlorine is commonly used for disinfection. Many people prefer to remove it for taste/odor and to reduce skin/hair dryness.</p></div><div class='tile' style='margin-top:10px;'><strong>Rotten egg smell (sulfur) - what causes it?</strong><p>Often from hydrogen sulfide in the supply or reactions in the water heater. Treatment depends on whether it is hot water, cold water, or both.</p></div></div>" },
          { type: "video", title: "Source water basics (city vs well)", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" }
        ],
        questions: [
          { key: "w_hardness", type: "single", title: "Do you know hardness (gpg)?", options: [
            { value: "unknown", label: "Unknown" },
            { value: "low", label: "0-5" },
            { value: "med", label: "6-10" },
            { value: "high", label: "11-20" },
            { value: "vhigh", label: "20+" }
          ]}
        ]
      },

      {
        id: "w_drinking",
        title: "Step 4: Drinking water - learn about RO",
        lead: "Taste and confidence usually come from a dedicated drinking-water system.",
        blocks: [
          { type: "callout", title: "Drinking water focus", body: "If your main goal is great-tasting drinking and cooking water, a point-of-use system (like RO) is often the best value." },
          { type: "video", title: "Reverse osmosis - what it does and doesn’t do", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" },
          { type: "text", html: "<div><div class='tile' style='margin-top:10px;'><strong>Does RO waste water?</strong><p>Yes, some. Modern systems are more efficient, and the taste + reduction benefits are often worth it for many homeowners.</p></div><div class='tile' style='margin-top:10px;'><strong>Is RO whole-home?</strong><p>Usually no. RO is typically installed at the kitchen sink for drinking and cooking.</p></div></div>" }
        ],
        questions: [
          { key: "w_cooking", type: "single", title: "Do you cook at home most days?", help: "If yes, RO has a bigger impact (coffee, soup, pasta, ice).", options: [
            { value: "yes", label: "Yes" },
            { value: "sometimes", label: "Sometimes" },
            { value: "no", label: "No" }
          ]}
        ]
      },

      {
        id: "w_ro",
        title: "Step 5: Reverse osmosis options",
        lead: "Now that you’ve seen what RO does, decide whether you want it and what style you prefer.",
        blocks: [
          { type: "callout", title: "RO decision", body: "If you want the single biggest drinking-water improvement, RO is usually it." },
          { type: "video", title: "RO options (standard vs remineralized)", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" }
        ],
        questions: [
          { key: "w_ro_want", type: "single", title: "Do you want RO for drinking water?", options: [
            { value: "yes", label: "Yes" },
            { value: "maybe", label: "Maybe / recommend if it fits" },
            { value: "no", label: "No" }
          ]},
          { key: "w_ro_style", type: "single", title: "RO taste preference", showIf: { any: [{ q: "w_ro_want", in: ["yes", "maybe"] }] }, options: [
            { value: "standard", label: "Standard RO (clean taste)" },
            { value: "remin", label: "RO with remineralization (adds minerals for taste)" },
            { value: "alkaline", label: "Alkaline/remineralized (strong taste preference)" }
          ]}
        ]
      },

      {
        id: "w_wholehome",
        title: "Step 6: Whole-home treatment layering",
        lead: "We layer treatment in the correct order: sediment (if needed) → carbon (if needed) → softening (if needed).",
        blocks: [
          { type: "callout", title: "Whole-home protection focus", body: "Whole-home treatment protects fixtures, water heater, appliances, and your shower experience." },
          { type: "text", html: "<div><div class='tile' style='margin-top:10px;'><strong>Do I need a softener and a whole-home filter?</strong><p>Often, yes: softeners handle hardness/scale; carbon filters handle chlorine/taste/odor. Sediment filtration is added when particles are present.</p></div><div class='tile' style='margin-top:10px;'><strong>Will a softener fix staining?</strong><p>Sometimes. Iron/manganese staining often needs specific filtration. White scale rings are usually hardness-related.</p></div></div>" },
          { type: "video", title: "Water softener basics (scale, appliances, shower feel)", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" }
        ],
        questions: [
          { key: "w_want_shower", type: "single", title: "Do you want showers to feel better (less dryness/odor)?", options: [
            { value: "yes", label: "Yes" },
            { value: "maybe", label: "Maybe" },
            { value: "no", label: "Not important" }
          ]},
          { key: "w_budget", type: "single", title: "Budget approach", options: [
            { value: "lowest", label: "Start with essentials" },
            { value: "mid", label: "Best value bundle" },
            { value: "top", label: "Strongest plan" }
          ]}
        ]
      },

      {
        id: "w_review",
        title: "Review: your water bundle",
        lead: "This is your recommended water plan with pricing. Add to cart or schedule a confirmation visit.",
        isReview: true,
        blocks: [
          { type: "callout", title: "Before you add to cart", body: "You can remove any items you don’t want and still keep the rest of the bundle. If any line says Quote, that means we recommend a quick verification step before finalizing." },
          { type: "video", title: "How to read your recommendation", caption: "Replace VIDEO_ID.", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" },
          { type: "callout", title: "If anything is unknown", body: "We can confirm hardness, pipe layout, and install access during the in-home visit. The bundle still gives you a strong baseline." }
        ],
        questions: [
          { key: "w_notes", type: "textarea", title: "Optional notes", help: "Any known issues (old galvanized pipe, water heater problems, basement plumbing)?" }
        ]
      }
    ],

    rules: [
      // Recommend a baseline test for most people (especially when anything is unknown)
      { when: { any: [{ q: "w_priority", truthy: true }, { q: "w_symptoms", truthy: true }, { q: "w_goals", truthy: true }] }, addProducts: ["water_test"] },

      // Sediment protection
      { when: { any: [{ q: "w_symptoms", has: "sediment" }, { q: "w_symptoms", has: "cloudy" }, { q: "w_plumbing_age", eq: "old" }] },
        addProducts: ["water_sediment"],
        addExplainers: [{ title: "Sediment first", body: "Sediment protection prevents clogs and protects other treatment devices. It is often the lowest-cost high-impact starting point." }]
      },

      // Carbon filtration (taste/odor/shower)
      { when: { any: [
          { q: "w_symptoms", has: "chlorine" },
          { q: "w_symptoms", has: "rottenegg" },
          { q: "w_want_shower", in: ["yes", "maybe"] },
          { q: "w_goals", has: "odor" },
          { q: "w_goals", has: "taste" }
        ]},
        addProducts: ["water_wholehome_carbon"],
        addExplainers: [{ title: "Carbon filtration", body: "Whole-home carbon improves shower and laundry experience and reduces chlorine taste/odor." }]
      },

      // Softener (hardness symptoms or goals)
      { when: { any: [
          { q: "w_symptoms", has: "scale" },
          { q: "w_symptoms", has: "spotting" },
          { q: "w_symptoms", has: "dryskin" },
          { q: "w_goals", has: "protect" },
          { q: "w_goals", has: "showers" }
        ]},
        addProducts: ["water_softener"],
        addNotes: ["A softener is the most direct solution for scale and spotting. Proper sizing prevents frequent regeneration."],
        addExplainers: [{ title: "Soft water benefits", body: "Soft water reduces scale buildup, extends appliance life, improves soap performance, and can make showers feel noticeably better." }]
      },

      // RO (drinking water)
      { when: { any: [
          { q: "w_ro_want", in: ["yes", "maybe"] },
          { q: "w_goals", has: "taste" },
          { q: "w_goals", has: "safety" },
          { q: "w_symptoms", has: "concern" }
        ]},
        addProducts: ["water_ro_system"],
        addExplainers: [{ title: "RO drinking water", body: "RO is the most noticeable taste upgrade. It also reduces many dissolved contaminants for higher confidence." }]
      },

      // Well water: UV layer when strong confidence selected
      { when: { all: [{ q: "w_source", eq: "well" }, { q: "w_priority", in: ["balanced", "strong"] }] },
        addProducts: ["water_uv_disinfection"],
        addExplainers: [{ title: "Well disinfection layer", body: "UV can add a confidence layer for microbial concerns when paired with proper pre-filtration." }]
      }
    ]
  };

  window.HWA_FLOWS = window.HWA_FLOWS || {};
  window.HWA_FLOWS.water = Flow;
})();
