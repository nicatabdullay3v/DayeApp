import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarSecond from '../../components/NavbarSecond/NavbarSecond'
import Header from '../../components/HowItworks/Header/Header'
import HowItworksHero from '../../components/HowItworks/HowitworksHero/Howitworkshero'
import Why from '../../components/HowItworks/Why/Why'
import WeKnow  from "./../../components/home/weknow/WeKnow"
import HowItWorksFindBaby from '../../components/HowItworks/HowItWorksFindBaby/HowItWorksFindbaby'
import VidioSection from '../../components/HowItworks/VidioSection/VidioSection'
import ChildcareAgency from '../../components/HowItworks/ChildCareAgency/ChildcareAgency'
import Howinfo from '../../components/HowItworks/HowInfo/Howinfo'
import HowJoin from '../../components/HowItworks/HowJoin/HowJoin'
import LearnMoreSearch from '../../components/HowItworks/LearnMoreSearch/LearnMoreSearch'
import Discover from "../../components/home/discover/Discover"
import FooterMiddle from "./../../components/home/footermiddle/FooterMiddle"
import FooterDown from "./../../components/home/footerdown/FooterDown"
const Howitworks = () => {
  return (
<>
<NavbarSecond/>
<Header/>
<HowItworksHero/>
<Why/>
<WeKnow/>
<HowItWorksFindBaby/>
<VidioSection/>
<ChildcareAgency/>
<Howinfo/>
<HowJoin/>
<LearnMoreSearch/>
<Discover/>
<FooterMiddle/>
<FooterDown/>
</>
  )
}

export default Howitworks