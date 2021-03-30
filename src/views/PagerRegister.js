import React from "react";
//components
import MainCard from "../components/Cards/MainCard";
import UsernameFrom from "../components/Forms/UsernameFrom";

export default function PagerRegister() {

    return (
        <section>
            <div className="justify-content-middle">
                <MainCard title={"Join chat"}>
                    <UsernameFrom/>
                </MainCard>
            </div>
        </section>
    )
};