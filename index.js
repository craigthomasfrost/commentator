const { json, send } = require('micro')
const sentiment      = require('sentiment')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const data     = await json(req)
  const comment  = data.comment
  const limit    = data.limit || 0
  const analyse  = sentiment(comment, (err, result) => {
    const analysis = {
      "commentate": result.score < limit ? true : false,
      "words": result.negative,
      "score": result.score
    }
    send(res, 200, analysis)
  })
}