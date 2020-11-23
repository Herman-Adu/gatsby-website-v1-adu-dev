import React from "react"
import { GiEarthAfricaEurope } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
    {
        icon: (<GiEarthAfricaEurope css={`color: #047BF1;`} />),
        title: "Over 100 destinations",
        desc: "Travel to over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #F3A82E;`} />),
        title: "1 Million Trips Made",
        desc: "Over 1 million trips completed las year"
    },
    {
        icon: (<MdTimer css={`color: #F34F2e;`} />),
        title: "Fastest Support",
        desc: "Access our support team 24/7"
    },
    {
        icon: (<FaMoneyCheck css={`color: #3AF576;`} />),
        title: "Best Deals",
        desc: "We offer the best prices"
    },
]