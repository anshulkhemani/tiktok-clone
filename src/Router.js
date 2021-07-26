import React, { Component } from "react";
import {Route } from "react-router-dom";
import Upload from "./Upload";

function Router() {
    return (
        <div>
            <Router>
                    <Route path="/Upload">
                        <Upload/>
                    </Route>
            </Router>
        </div>
    )
}

export default Router
