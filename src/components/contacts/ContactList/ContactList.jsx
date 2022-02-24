
import React from "react";
import { Link } from "react-router-dom"

let ContactList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                     <Link to={'/contacts/add'} className="btn btn-primary ms-2"><i className="fa fa-plus-circle me-2" /> New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis similique debitis facere nihil sapiente, quas dolor quidem tenetur nulla error, cumque, dicta id et exercitationem unde totam earum vel!</p>
                            </div>
                        </div>
                        {/* form section */}
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names" />
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search" />
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-md-4">
                                        <img src="https://comptes-actes-experts.fr/wp-content/uploads/2021/05/mous-e1620808026160.png" className="contact-img" alt="Avatar" />
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name: <span className="fw-bold">Emmanuel</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile: <span className="fw-bold">09876543</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email: <span className="fw-bold">emma@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1">

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ContactList;



