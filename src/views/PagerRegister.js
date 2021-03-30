import React from "react";
//components
import MainCard from "../components/Cards/MainCard";
import UsernameFrom from "../components/Forms/UsernameFrom";

export default function PagerRegister() {

    return (
        <section>
            <div className="justify-content-middle">
                <MainCard title={"Join chat"} classNames={"card round-border-8 shadow p-40"}>
                    <UsernameFrom/>
                </MainCard>
            </div>
        </section>
    )
};