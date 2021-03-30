import React from "react";
import MainCard from "../components/Cards/MainCard";
import UsernameFrom from "../components/Forms/UsernameFrom";

export default function PagerChat() {

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