import { useState } from "react"

const UserPost = () => {

    return (
        <>
            <h1>Add your posts</h1>
            <div>
                <form>
                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label">Post</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Add your title here" aria-label="Username" aria-describedby="basic-addon1" name="post" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="formFileSm" className="col-sm-2 form-label">Image</label>
                        <div className="col-sm-10">
                            <input class="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="exampleFormControlTextarea1" className="col-sm-2 form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>


                </form>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Post
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to Post?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserPost