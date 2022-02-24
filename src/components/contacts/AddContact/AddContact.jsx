import React from "react";
import { Link } from "react-router-dom";

let AddContact = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 fw-bold text-success">Create Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae 
                                blanditiis quas voluptatem, est et reiciendis eaque dolorum nam maiores cum ipsam aperiam minima 
                                esse doloremque modi, beatae molestiae odit repellat harum commodi sunt labore adipisci. Ex inventore 
                                maxime esse fugit quas molestiae aperiam soluta porro earum? Atque beatae quo recusandae qui repellendus 
                                aliquid itaque quasi asperiores saepe. Nam, mollitia tempora.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                             <form>
                                 <div className="mb-2">
                                     <input type="text" className="form-control" placeholder="Name" />
                                 </div>
                                 <div className="mb-2">
                                     <input type="text" className="form-control" placeholder="Photo URL" />
                                 </div>
                                 <div className="mb-2">
                                     <input type="number" className="form-control" placeholder="Mobile" />
                                 </div>
                                 <div className="mb-2">
                                     <input type="email" className="form-control" placeholder="Email" />
                                 </div>
                                 <div className="mb-2">
                                     <input type="text" className="form-control" placeholder="Company" />
                                 </div>
                                 <div className="mb-2">
                                     <input type="text" className="form-control" placeholder="Title" />
                                 </div>
                                 <div className="mb-2">
                                        <select className="form-control">
                                        <option value="">(select A group)</option>
                                        </select>
                                 </div>
                                 <div className="mb-2">
                                     <input type="submit" className="btn btn-success" value="Create" />
                                     <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link>
                                 </div>
                             </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddContact;



