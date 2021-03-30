import React from "react";
//components
import MainCard from "../components/Cards/MainCard";
import Message from "../components/Message/Message";

export default function PagerRegister() {

    return (
        <section>
            <div className="justify-content-middle">
                <MainCard>
                    <Message name={"JP"}/>
                </MainCard>
            </div>
        </section>
    )
};