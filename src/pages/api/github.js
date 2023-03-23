export default async (req, res) => {
    const repo = "fulltimeforce-test"
    const owner = "joseenietoo"
    const url = "https://api.github.com/repos/"+owner+"/"+repo+"/commits"
    const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        }
      });
    const jsonResponse = await response.json()

    return res.status(200).json({
        jsonResponse,
    })
}