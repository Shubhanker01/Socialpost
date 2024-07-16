import { useEffect, useState } from "react"

const UserPost = () => {
    const addPost = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }

        let bodyContent = `caption=${document.getElementById('caption').value}&description=${document.getElementById('exampleFormControlTextarea1').value}`;

        let response = await fetch("http://localhost:3000/post", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        alert(data)
    }
    return (
        <>
            <h1>Add your posts</h1>
            <div>
                <form>
                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label">Post</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Add your title here" aria-label="Username" aria-describedby="basic-addon1" name="post" id="caption" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="exampleFormControlTextarea1" className="col-sm-2 form-label">Add post</label>
                        <div className="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </form>
                <div class="col-auto">
                    <button class="btn btn-primary mb-3" onClick={addPost}>Add Post</button>
                </div>
            </div>


        </>
    )
}
export default UserPost