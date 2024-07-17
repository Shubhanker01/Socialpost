import { useEffect, useState } from "react"
import IndividualComment from "./IndividualComment"

const Comments = ({ id }) => {
    let [comments, showComments] = useState([])
    let [individualComment, setIndividualComment] = useState("")

    useEffect(() => {
        async function comm() {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let response = await fetch(`http://localhost:3000/showcomments/${id}`, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            return data
        }
        comm().then((res) => {
            showComments(res)
        })
            .catch((err) => console.log(err))
    }, [comments])

    const addComment = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = `comment=${individualComment}`;
        let response = await fetch(`http://localhost:3000/comments/${id}`, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        alert(data)

    }

    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Comments
            </button>

            <div class="collapse" id="collapseExample">
                {
                    comments.map((res) => {
                        return <IndividualComment comments={res} key={comments.indexOf(res)} />
                    })
                }
                <div>
                    <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Add comment</button>
                </div>
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">New Comment</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <textarea class="form-control" id="message-text" value={individualComment} onChange={(e) => { setIndividualComment(e.target.value) }}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={addComment} type="button" class="btn btn-primary" data-bs-dismiss="modal">Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Comments