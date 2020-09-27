const wordpos = new WordPOS({
    dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict"
  })
  
  $(document).ready(() => {
    updateBackground = () => {
      let sentence = $("#sentence").val()
      wordpos.getPOS(sentence).then(types => {
        const leftGradient = (((types.verbs.length +
          types.adverbs.length +
          types.nouns.length +
          types.adjectives.length) * 4) + (types.rest.length / 20))
  
        const rightGradient = sentence.length
  
        $("body").css("background-image", `linear-gradient(to right,
          hsl(${leftGradient}, 100%, 50%), hsl(${rightGradient}, 100%, 50%)
        `)
      })
    }
    updateBackground()
    $("#sentence").on("keydown", updateBackground)
  })
  