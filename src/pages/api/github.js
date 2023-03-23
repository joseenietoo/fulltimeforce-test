export default async (req, res) => {
    const repo = "fulltimeforce-test"
    const owner = "joseenietoo"
    const url = "https://api.github.com/repos/"+owner+"/"+repo+"/commits"
    const response = await fetch(url)
    const jsonResponse = await response.json()

    return res.status(200).json({
        jsonResponse,
    })
}