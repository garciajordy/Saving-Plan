let ls = localStorage
let datetoday = document.getElementById("datetoday")
let weektoday = document.getElementById("weektoday")
let textsalary = document.getElementById("textSalary")
let textbills = document.getElementById("textBills")
let textamount = document.getElementById("textAmount")
let monday = document.getElementById("monday")
let tuesday = document.getElementById("tuesday")
let wednesday = document.getElementById("wednesday")
let thursday = document.getElementById("thursday")
let friday = document.getElementById("friday")
let saturday = document.getElementById("saturday")
let sunday = document.getElementById("sunday")
let totalmospw = document.getElementById("TotalMoSpw")
let totalmosaw = document.getElementById("TotalMoSaw")
let totalmospm = document.getElementById("TotalMoSpm")
let totalmosam = document.getElementById("TotalMoSam")
let totalmospy = document.getElementById("TotalMoSpy")
let totalmosay = document.getElementById("TotalMoSay")
var cur = "&nbsp;§"
let mof = 0
let tuf = 0
let wef = 0
let thf = 0
let frf = 0
let saf = 0
let suf = 0
let moc = 0
let tuc = 0
let wec = 0
let thc = 0
let frc = 0
let sac = 0
let suc = 0
let moa = 0
let tua = 0
let wea = 0
let tha = 0
let fra = 0
let saa = 0
let sua = 0
let mot = 0
let tut = 0
let wet = 0
let tht = 0
let frt = 0
let sat = 0
let sut = 0
let moo = 0
let tuo = 0
let weo = 0
let tho = 0
let fro = 0
let sao = 0
let suo = 0
mof = document.getElementById("mof")
tuf = document.getElementById("tuf")
wef = document.getElementById("wef")
thf = document.getElementById("thf")
frf = document.getElementById("frf")
saf = document.getElementById("saf")
suf = document.getElementById("suf")
moc = document.getElementById("moc")
tuc = document.getElementById("tuc")
wec = document.getElementById("wec")
thc = document.getElementById("thc")
frc = document.getElementById("frc")
sac = document.getElementById("sac")
suc = document.getElementById("suc")
moa = document.getElementById("moa")
tua = document.getElementById("tua")
wea = document.getElementById("wea")
tha = document.getElementById("tha")
fra = document.getElementById("fra")
saa = document.getElementById("saa")
sua = document.getElementById("sua")
mot = document.getElementById("mot")
tut = document.getElementById("tut")
wet = document.getElementById("wet")
tht = document.getElementById("tht")
frt = document.getElementById("frt")
sat = document.getElementById("sat")
sut = document.getElementById("sut")
moo = document.getElementById("moo")
tuo = document.getElementById("tuo")
weo = document.getElementById("weo")
tho = document.getElementById("tho")
fro = document.getElementById("fro")
sao = document.getElementById("sao")
suo = document.getElementById("suo")
let mosa = document.getElementById("mosa1")
let tusa = document.getElementById("tusa1")
let wesa = document.getElementById("wesa1")
let thsa = document.getElementById("thsa1")
let frsa = document.getElementById("frsa1")
let sasa = document.getElementById("sasa1")
let susa = document.getElementById("susa1")
let mosp = document.getElementById("mosp1")
let tusp = document.getElementById("tusp1")
let wesp = document.getElementById("wesp1")
let thsp = document.getElementById("thsp1")
let frsp = document.getElementById("frsp1")
let sasp = document.getElementById("sasp1")
let susp = document.getElementById("susp1")
let moto = document.getElementById("moto")
let tuto = document.getElementById("tuto")
let weto = document.getElementById("weto")
let thto = document.getElementById("thto")
let frto = document.getElementById("frto")
let sato = document.getElementById("sato")
let suto = document.getElementById("suto")
let monthly = 0
let daily = 0
let weeklysp = 0
let weeklysa = 0
let monthlysp = 0
let monthlysa = 0
let totalsaving = 0
let totalspending = 0
let ssalary = 0
let bbills = 0
let mof1 = 0
let tuf1 = 0
let wef1 = 0
let thf1 = 0
let frf1 = 0
let saf1 = 0
let suf1 = 0
let moc1 = 0
let tuc1 = 0
let wec1 = 0
let thc1 = 0
let frc1 = 0
let sac1 = 0
let suc1 = 0
let moa1 = 0
let tua1 = 0
let wea1 = 0
let tha1 = 0
let fra1 = 0
let saa1 = 0
let sua1 = 0
let mot1 = 0
let tut1 = 0
let wet1 = 0
let tht1 = 0
let frt1 = 0
let sat1 = 0
let sut1 = 0
let moo1 = 0
let tuo1 = 0
let weo1 = 0
let tho1 = 0
let fro1 = 0
let sao1 = 0
let suo1 = 0
let motosp = 0
let tutosp = 0
let wetosp = 0
let thtosp = 0
let frtosp = 0
let satosp = 0
let sutosp = 0
let motosa = 0
let tutosa = 0
let wetosa = 0
let thtosa = 0
let frtosa = 0
let satosa = 0
let sutosa = 0
if (ls.getItem("cur")) {
    cur = ls.getItem("cur")
}
if (ls.getItem("mof2")) {
    mof.value = parseFloat(ls.getItem("mof2"))
}
if (ls.getItem("tuf2")) {
    tuf.value = parseFloat(ls.getItem("tuf2"))
}
if (ls.getItem("wef2")) {
    wef.value = parseFloat(ls.getItem("wef2"))
}
if (ls.getItem("thf2")) {
    thf.value = parseFloat(ls.getItem("thf2"))
}
if (ls.getItem("frf2")) {
    frf.value = parseFloat(ls.getItem("frf2"))
}
if (ls.getItem("saf2")) {
    saf.value = parseFloat(ls.getItem("saf2"))
}
if (ls.getItem("suf2")) {
    suf.value = parseFloat(ls.getItem("suf2"))
}
if (ls.getItem("moc2")) {
    moc.value = parseFloat(ls.getItem("moc2"))
}
if (ls.getItem("tuc2")) {
    tuc.value = parseFloat(ls.getItem("tuc2"))
}
if (ls.getItem("wec2")) {
    wec.value = parseFloat(ls.getItem("wec2"))
}
if (ls.getItem("thc2")) {
    thc.value = parseFloat(ls.getItem("thc2"))
}
if (ls.getItem("frc2")) {
    frc.value = parseFloat(ls.getItem("frc2"))
}
if (ls.getItem("sac2")) {
    sac.value = parseFloat(ls.getItem("sac2"))
}
if (ls.getItem("suc2")) {
    suc.value = parseFloat(ls.getItem("suc2"))
}
if (ls.getItem("moa2")) {
    moa.value = parseFloat(ls.getItem("moa2"))
}
if (ls.getItem("tua2")) {
    tua.value = parseFloat(ls.getItem("tua2"))
}
if (ls.getItem("wea2")) {
    wea.value = parseFloat(ls.getItem("wea2"))
}
if (ls.getItem("tha2")) {
    tha.value = parseFloat(ls.getItem("tha2"))
}
if (ls.getItem("fra2")) {
    fra.value = parseFloat(ls.getItem("fra2"))
}
if (ls.getItem("saa2")) {
    saa.value = parseFloat(ls.getItem("saa2"))
}
if (ls.getItem("sua2")) {
    sua.value = parseFloat(ls.getItem("sua2"))
}
if (ls.getItem("mot2")) {
    mot.value = parseFloat(ls.getItem("mot2"))
}
if (ls.getItem("tut2")) {
    tut.value = parseFloat(ls.getItem("tut2"))
}
if (ls.getItem("wet2")) {
    wet.value = parseFloat(ls.getItem("wet2"))
}
if (ls.getItem("tht2")) {
    tht.value = parseFloat(ls.getItem("tht2"))
}
if (ls.getItem("frt2")) {
    frt.value = parseFloat(ls.getItem("frt2"))
}
if (ls.getItem("sat2")) {
    sat.value = parseFloat(ls.getItem("sat2"))
}
if (ls.getItem("sut2")) {
    sut.value = parseFloat(ls.getItem("sut2"))
}
if (ls.getItem("moo2")) {
    moo.value = parseFloat(ls.getItem("moo2"))
}
if (ls.getItem("tuo2")) {
    tuo.value = parseFloat(ls.getItem("tuo2"))
}
if (ls.getItem("weo2")) {
    weo.value = parseFloat(ls.getItem("weo2"))
}
if (ls.getItem("tho2")) {
    tho.value = parseFloat(ls.getItem("tho2"))
}
if (ls.getItem("fro2")) {
    fro.value = parseFloat(ls.getItem("fro2"))
}
if (ls.getItem("sao2")) {
    sao.value = parseFloat(ls.getItem("sao2"))
}
if (ls.getItem("suo2")) {
    suo.value = parseFloat(ls.getItem("suo2"))
}


if (ls.getItem("motosp")) {
    motosp = parseFloat(ls.getItem("motosp"))
}
if (ls.getItem("motosa")) {
    motosa = parseFloat(ls.getItem("motosa"))
}
if (ls.getItem("tutosp")) {
    tutosp = parseFloat(ls.getItem("tutosp"))
}
if (ls.getItem("tutosa")) {
    tutosa = parseFloat(ls.getItem("tutosa"))
}
if (ls.getItem("wetosp")) {
    wetosp = parseFloat(ls.getItem("wetosp"))
}
if (ls.getItem("wetosa")) {
    wetosa = parseFloat(ls.getItem("wetosa"))
}
if (ls.getItem("thtosp")) {
    thtosp = parseFloat(ls.getItem("thtosp"))
}
if (ls.getItem("thtosa")) {
    thtosa = parseFloat(ls.getItem("thtosa"))
}
if (ls.getItem("frtosp")) {
    frtosp = parseFloat(ls.getItem("frtosp"))
}
if (ls.getItem("frtosa")) {
    frtosa = parseFloat(ls.getItem("frtosa"))
}
if (ls.getItem("satosp")) {
    satosp = parseFloat(ls.getItem("satosp"))
}
if (ls.getItem("satosa")) {
    satosa = parseFloat(ls.getItem("satosa"))
}
if (ls.getItem("sutosp")) {
    sutosp = parseFloat(ls.getItem("sutosp"))
}
if (ls.getItem("sutosa")) {
    sutosa = parseFloat(ls.getItem("sutosa"))
}
if (ls.getItem("salary")) {
    salary = parseFloat(ls.getItem("salary"))
}
if (ls.getItem("monthly")) {
    monthly = parseFloat(ls.getItem("monthly"))
}
if (ls.getItem("daily")) {
    daily = parseFloat(ls.getItem("daily"))
}
if (ls.getItem("monthlysp")) {
    monthlysp = parseFloat(ls.getItem("monthlysp"))
};
if (ls.getItem("monthlysa")) {
    monthlysa = parseFloat(ls.getItem("monthlysa"))
};
if (ls.getItem("totalspending")) {
    totalspending = parseFloat(ls.getItem("totalspending"))
};
if (ls.getItem("totalsaving")) {
    totalsaving = parseFloat(ls.getItem("totalsaving"))
};
if (ls.getItem("ssalary")) {
    ssalary = parseFloat(ls.getItem("ssalary"))
}
if (ls.getItem("bbills")) {
    bbills = parseFloat(ls.getItem("bbills"))
}
innerhtml()
function innerhtml() {
    textsalary.innerHTML = "Salary: " + ssalary.toFixed(2) + cur
    textbills.innerHTML = "Bills: " + bbills.toFixed(2) + cur
    textamount.innerHTML = "Amount to spend: " + monthly.toFixed(2) + cur
    mosp.innerHTML = parseFloat(motosp).toFixed(2) + cur
    mosa.innerHTML = parseFloat(motosa).toFixed(2) + cur
    tusp.innerHTML = parseFloat(tutosp).toFixed(2) + cur
    tusa.innerHTML = parseFloat(tutosa).toFixed(2) + cur
    wesp.innerHTML = parseFloat(wetosp).toFixed(2) + cur
    wesa.innerHTML = parseFloat(wetosa).toFixed(2) + cur
    thsp.innerHTML = parseFloat(thtosp).toFixed(2) + cur
    thsa.innerHTML = parseFloat(thtosa).toFixed(2) + cur
    frsp.innerHTML = parseFloat(frtosp).toFixed(2) + cur
    frsa.innerHTML = parseFloat(frtosa).toFixed(2) + cur
    sasp.innerHTML = parseFloat(satosp).toFixed(2) + cur
    sasa.innerHTML = parseFloat(satosa).toFixed(2) + cur
    susp.innerHTML = parseFloat(sutosp).toFixed(2) + cur
    susa.innerHTML = parseFloat(sutosa).toFixed(2) + cur
    moto.innerHTML = "Total: " + daily + cur
    tuto.innerHTML = "Total: " + daily + cur
    weto.innerHTML = "Total: " + daily + cur
    thto.innerHTML = "Total: " + daily + cur
    frto.innerHTML = "Total: " + daily + cur
    sato.innerHTML = "Total: " + daily + cur
    suto.innerHTML = "Total: " + daily + cur
    totalmospm.innerHTML = parseFloat(monthlysp).toFixed(2) + cur
    totalmosam.innerHTML = parseFloat(monthlysa).toFixed(2) + cur
    totalmospy.innerHTML = parseFloat(totalspending).toFixed(2) + cur
    totalmosay.innerHTML = parseFloat(totalsaving).toFixed(2) + cur





}
mof1 = mof.value
tuf1 = tuf.value
wef1 = wef.value
thf1 = thf.value
frf1 = frf.value
saf1 = saf.value
suf1 = suf.value
moc1 = moc.value
tuc1 = tuc.value
wec1 = wec.value
thc1 = thc.value
frc1 = frc.value
sac1 = sac.value
suc1 = suc.value
moa1 = moa.value
tua1 = tua.value
wea1 = wea.value
tha1 = tha.value
fra1 = fra.value
saa1 = saa.value
sua1 = sua.value
mot1 = mot.value
tut1 = tut.value
wet1 = wet.value
tht1 = tht.value
frt1 = frt.value
sat1 = sat.value
sut1 = sut.value
moo1 = moo.value
tuo1 = tuo.value
weo1 = weo.value
tho1 = tho.value
fro1 = fro.value
sao1 = sao.value
suo1 = suo.value


function mof2() {
    let key = "mof2"
    mof1 = mof.value
    ls.setItem(key, mof1)
    let key2 = "motosp"
    let key3 = "motosa"

    motosp = parseFloat(mof1) + parseFloat(moc1) + parseFloat(moa1) + parseFloat(mot1) + parseFloat(moo1)
    mosp.innerHTML = motosp.toFixed(2) + cur
    motosa = daily - motosp
    mosa.innerHTML = motosa.toFixed(2) + cur;
    ls.setItem(key2, motosp)
    ls.setItem(key3, motosa)




}
function tuf2() {
    let key = "tuf2"
    tuf1 = tuf.value
    ls.setItem(key, tuf1)
    let key2 = "tutosp"
    let key3 = "tutosa"
    tutosp = parseFloat(tuf1) + parseFloat(tuc1) + parseFloat(tua1) + parseFloat(tut1) + parseFloat(tuo1)
    tusp.innerHTML = tutosp.toFixed(2) + cur
    tutosa = daily - tutosp
    tusa.innerHTML = tutosa.toFixed(2) + cur
    ls.setItem(key2, tutosp)
    ls.setItem(key3, tutosa)


}
function wef2() {
    let key = "wef2"
    wef1 = wef.value
    ls.setItem(key, wef1)
    let key2 = "wetosp"
    let key3 = "wetosa"
    wetosp = parseFloat(wef1) + parseFloat(wec1) + parseFloat(wea1) + parseFloat(wet1) + parseFloat(weo1)
    wesp.innerHTML = wetosp.toFixed(2) + cur
    wetosa = daily - wetosp
    wesa.innerHTML = wetosa.toFixed(2) + cur
    ls.setItem(key2, wetosp)
    ls.setItem(key3, wetosa)

}
function thf2() {
    let key = "thf2"
    thf1 = thf.value
    ls.setItem(key, thf1)
    let key2 = "thtosp"
    let key3 = "thtosa"
    thtosp = parseFloat(thf1) + parseFloat(thc1) + parseFloat(tha1) + parseFloat(tht1) + parseFloat(tho1)
    thsp.innerHTML = thtosp.toFixed(2) + cur
    thtosa = daily - thtosp
    thsa.innerHTML = thtosa.toFixed(2) + cur
    ls.setItem(key2, thtosp)
    ls.setItem(key3, thtosa)


}
function frf2() {
    let key = "frf2"
    frf1 = frf.value
    ls.setItem(key, frf1)
    let key2 = "frtosp"
    let key3 = "frtosa"
    frtosp = parseFloat(frf1) + parseFloat(frc1) + parseFloat(fra1) + parseFloat(frt1) + parseFloat(fro1)
    frsp.innerHTML = frtosp.toFixed(2) + cur
    frtosa = daily - frtosp
    frsa.innerHTML = frtosa.toFixed(2) + cur
    ls.setItem(key2, frtosp)
    ls.setItem(key3, frtosa)


}
function saf2() {
    let key = "saf2"
    saf1 = saf.value
    ls.setItem(key, saf1)
    let key2 = "satosp"
    let key3 = "satosa"
    satosp = parseFloat(saf1) + parseFloat(sac1) + parseFloat(saa1) + parseFloat(sat1) + parseFloat(sao1)
    sasp.innerHTML = satosp.toFixed(2) + cur
    satosa = daily - satosp
    sasa.innerHTML = satosa.toFixed(2) + cur
    ls.setItem(key2, satosp)
    ls.setItem(key3, satosa)


}
function suf2() {
    let key = "suf2"
    suf1 = suf.value
    ls.setItem(key, suf1)
    let key2 = "sutosp"
    let key3 = "sutosa"
    sutosp = parseFloat(suf1) + parseFloat(suc1) + parseFloat(sua1) + parseFloat(sut1) + parseFloat(suo1)
    susp.innerHTML = sutosp.toFixed(2) + cur
    sutosa = daily - sutosp
    susa.innerHTML = sutosa.toFixed(2) + cur
    ls.setItem(key2, sutosp)
    ls.setItem(key3, sutosa)


}
function moc2() {
    let key = "moc2"
    moc1 = moc.value
    ls.setItem(key, moc1)
    let key2 = "motosp"
    let key3 = "motosa"
    motosp = parseFloat(mof1) + parseFloat(moc1) + parseFloat(moa1) + parseFloat(mot1) + parseFloat(moo1)
    mosp.innerHTML = motosp.toFixed(2) + cur
    motosa = daily - motosp
    mosa.innerHTML = motosa.toFixed(2) + cur
    ls.setItem(key2, motosp)
    ls.setItem(key3, motosa)

}
function tuc2() {
    let key = "tuc2"
    tuc1 = tuc.value
    ls.setItem(key, tuc1)
    let key2 = "tutosp"
    let key3 = "tutosa"
    tutosp = parseFloat(tuf1) + parseFloat(tuc1) + parseFloat(tua1) + parseFloat(tut1) + parseFloat(tuo1)
    tusp.innerHTML = tutosp.toFixed(2) + cur
    tutosa = daily - tutosp
    tusa.innerHTML = tutosa.toFixed(2) + cur
    ls.setItem(key2, tutosp)
    ls.setItem(key3, tutosa)


}
function wec2() {
    let key = "wec2"
    wec1 = wec.value
    ls.setItem(key, wec1)
    let key2 = "wetosp"
    let key3 = "wetosa"
    wetosp = parseFloat(wef1) + parseFloat(wec1) + parseFloat(wea1) + parseFloat(wet1) + parseFloat(weo1)
    wesp.innerHTML = wetosp.toFixed(2) + cur
    wetosa = daily - wetosp
    wesa.innerHTML = wetosa.toFixed(2) + cur
    ls.setItem(key2, wetosp)
    ls.setItem(key3, wetosa)


}
function thc2() {
    let key = "thc2"
    thc1 = thc.value
    ls.setItem(key, thc1)
    let key2 = "thtosp"
    let key3 = "thtosa"
    thtosp = parseFloat(thf1) + parseFloat(thc1) + parseFloat(tha1) + parseFloat(tht1) + parseFloat(tho1)
    thsp.innerHTML = thtosp.toFixed(2) + cur
    thtosa = daily - thtosp
    thsa.innerHTML = thtosa.toFixed(2) + cur
    ls.setItem(key2, thtosp)
    ls.setItem(key3, thtosa)


}
function frc2() {
    let key = "frc2"
    frc1 = frc.value
    ls.setItem(key, frc1)
    let key2 = "frtosp"
    let key3 = "frtosa"
    frtosp = parseFloat(frf1) + parseFloat(frc1) + parseFloat(fra1) + parseFloat(frt1) + parseFloat(fro1)
    frsp.innerHTML = frtosp.toFixed(2) + cur
    frtosa = daily - frtosp
    frsa.innerHTML = frtosa.toFixed(2) + cur
    ls.setItem(key2, frtosp)
    ls.setItem(key3, frtosa)

}
function sac2() {
    let key = "sac2"
    sac1 = sac.value
    ls.setItem(key, sac1)
    let key2 = "satosp"
    let key3 = "satosa"
    satosp = parseFloat(saf1) + parseFloat(sac1) + parseFloat(saa1) + parseFloat(sat1) + parseFloat(sao1)
    sasp.innerHTML = satosp.toFixed(2) + cur
    satosa = daily - satosp
    sasa.innerHTML = satosa.toFixed(2) + cur
    ls.setItem(key2, satosp)
    ls.setItem(key3, satosa)


}
function suc2() {
    let key = "suc2"
    suc1 = suc.value
    ls.setItem(key, suc1)
    let key2 = "sutosp"
    let key3 = "sutosa"
    sutosp = parseFloat(suf1) + parseFloat(suc1) + parseFloat(sua1) + parseFloat(sut1) + parseFloat(suo1)
    susp.innerHTML = sutosp.toFixed(2) + cur
    sutosa = daily - sutosp
    susa.innerHTML = sutosa.toFixed(2) + cur
    ls.setItem(key2, sutosp)
    ls.setItem(key3, sutosa)


}
function moa2() {
    let key = "moa2"
    moa1 = moa.value
    ls.setItem(key, moa1)

    let key2 = "motosp"
    let key3 = "motosa"
    motosp = parseFloat(mof1) + parseFloat(moc1) + parseFloat(moa1) + parseFloat(mot1) + parseFloat(moo1)
    mosp.innerHTML = motosp.toFixed(2) + cur
    motosa = daily - motosp
    mosa.innerHTML = motosa.toFixed(2) + cur
    ls.setItem(key2, motosp)
    ls.setItem(key3, motosa)

}
function tua2() {
    let key = "tua2"
    tua1 = tua.value
    ls.setItem(key, tua1)
    let key2 = "tutosp"
    let key3 = "tutosa"
    tutosp = parseFloat(tuf1) + parseFloat(tuc1) + parseFloat(tua1) + parseFloat(tut1) + parseFloat(tuo1)
    tusp.innerHTML = tutosp.toFixed(2) + cur
    tutosa = daily - tutosp
    tusa.innerHTML = tutosa.toFixed(2) + cur
    ls.setItem(key2, tutosp)
    ls.setItem(key3, tutosa)


}
function wea2() {
    let key = "wea2"
    wea1 = wea.value
    ls.setItem(key, wea1)
    let key2 = "wetosp"
    let key3 = "wetosa"
    wetosp = parseFloat(wef1) + parseFloat(wec1) + parseFloat(wea1) + parseFloat(wet1) + parseFloat(weo1)
    wesp.innerHTML = wetosp.toFixed(2) + cur
    wetosa = daily - wetosp
    wesa.innerHTML = wetosa.toFixed(2) + cur
    ls.setItem(key2, wetosp)
    ls.setItem(key3, wetosa)


}
function tha2() {
    let key = "tha2"
    tha1 = tha.value
    ls.setItem(key, tha1)
    let key2 = "thtosp"
    let key3 = "thtosa"
    thtosp = parseFloat(thf1) + parseFloat(thc1) + parseFloat(tha1) + parseFloat(tht1) + parseFloat(tho1)
    thsp.innerHTML = thtosp.toFixed(2) + cur
    thtosa = daily - thtosp
    thsa.innerHTML = thtosa.toFixed(2) + cur
    ls.setItem(key2, thtosp)
    ls.setItem(key3, thtosa)


}
function fra2() {
    let key = "fra2"
    fra1 = fra.value
    ls.setItem(key, fra1)
    let key2 = "frtosp"
    let key3 = "frtosa"
    frtosp = parseFloat(frf1) + parseFloat(frc1) + parseFloat(fra1) + parseFloat(frt1) + parseFloat(fro1)
    frsp.innerHTML = frtosp.toFixed(2) + cur
    frtosa = daily - frtosp
    frsa.innerHTML = frtosa.toFixed(2) + cur
    ls.setItem(key2, frtosp)
    ls.setItem(key3, frtosa)


}
function saa2() {
    let key = "saa2"
    saa1 = saa.value
    ls.setItem(key, saa1)
    let key2 = "satosp"
    let key3 = "satosa"
    satosp = parseFloat(saf1) + parseFloat(sac1) + parseFloat(saa1) + parseFloat(sat1) + parseFloat(sao1)
    sasp.innerHTML = satosp.toFixed(2) + cur
    satosa = daily - satosp
    sasa.innerHTML = satosa.toFixed(2) + cur
    ls.setItem(key2, satosp)
    ls.setItem(key3, satosa)


}
function sua2() {
    let key = "sua2"
    sua1 = sua.value
    ls.setItem(key, sua1)
    let key2 = "sutosp"
    let key3 = "sutosa"
    sutosp = parseFloat(suf1) + parseFloat(suc1) + parseFloat(sua1) + parseFloat(sut1) + parseFloat(suo1)
    susp.innerHTML = sutosp.toFixed(2) + cur
    sutosa = daily - sutosp
    susa.innerHTML = sutosa.toFixed(2) + cur
    ls.setItem(key2, sutosp)
    ls.setItem(key3, sutosa)


}
function mot2() {
    let key = "mot2"
    mot1 = mot.value
    ls.setItem(key, mot1)
    let key2 = "motosp"
    let key3 = "motosa"
    motosp = parseFloat(mof1) + parseFloat(moc1) + parseFloat(moa1) + parseFloat(mot1) + parseFloat(moo1)
    mosp.innerHTML = motosp.toFixed(2) + cur
    motosa = daily - motosp
    mosa.innerHTML = motosa.toFixed(2) + cur
    ls.setItem(key2, motosp)
    ls.setItem(key3, motosa)

}
function tut2() {
    let key = "tut2"
    tut1 = tut.value
    ls.setItem(key, tut1)
    let key2 = "tutosp"
    let key3 = "tutosa"
    tutosp = parseFloat(tuf1) + parseFloat(tuc1) + parseFloat(tua1) + parseFloat(tut1) + parseFloat(tuo1)
    tusp.innerHTML = tutosp.toFixed(2) + cur
    tutosa = daily - tutosp
    tusa.innerHTML = tutosa.toFixed(2) + cur
    ls.setItem(key2, tutosp)
    ls.setItem(key3, tutosa)


}
function wet2() {
    let key = "wet2"
    wet1 = wet.value
    ls.setItem(key, wet1)
    let key2 = "wetosp"
    let key3 = "wetosa"
    wetosp = parseFloat(wef1) + parseFloat(wec1) + parseFloat(wea1) + parseFloat(wet1) + parseFloat(weo1)
    wesp.innerHTML = wetosp.toFixed(2) + cur
    wetosa = daily - wetosp
    wesa.innerHTML = wetosa.toFixed(2) + cur
    ls.setItem(key2, wetosp)
    ls.setItem(key3, wetosa)


}
function tht2() {
    let key = "tht2"
    tht1 = tht.value
    ls.setItem(key, tht1)
    let key2 = "thtosp"
    let key3 = "thtosa"
    thtosp = parseFloat(thf1) + parseFloat(thc1) + parseFloat(tha1) + parseFloat(tht1) + parseFloat(tho1)
    thsp.innerHTML = thtosp.toFixed(2) + cur
    thtosa = daily - thtosp
    thsa.innerHTML = thtosa.toFixed(2) + cur
    ls.setItem(key2, thtosp)
    ls.setItem(key3, thtosa)


}
function frt2() {
    let key = "frt2"
    frt1 = frt.value
    ls.setItem(key, frt1)
    let key2 = "frtosp"
    let key3 = "frtosa"
    frtosp = parseFloat(frf1) + parseFloat(frc1) + parseFloat(fra1) + parseFloat(frt1) + parseFloat(fro1)
    frsp.innerHTML = frtosp.toFixed(2) + cur
    frtosa = daily - frtosp
    frsa.innerHTML = frtosa.toFixed(2) + cur
    ls.setItem(key2, frtosp)
    ls.setItem(key3, frtosa)


}
function sat2() {
    let key = "sat2"
    sat1 = sat.value
    ls.setItem(key, sat1)
    let key2 = "satosp"
    let key3 = "satosa"
    satosp = parseFloat(saf1) + parseFloat(sac1) + parseFloat(saa1) + parseFloat(sat1) + parseFloat(sao1)
    sasp.innerHTML = satosp.toFixed(2) + cur
    satosa = daily - satosp
    sasa.innerHTML = satosa.toFixed(2) + cur
    ls.setItem(key2, satosp)
    ls.setItem(key3, satosa)


}
function sut2() {
    let key = "sut2"
    sut1 = sut.value
    ls.setItem(key, sut1)
    let key2 = "sutosp"
    let key3 = "sutosa"
    sutosp = parseFloat(suf1) + parseFloat(suc1) + parseFloat(sua1) + parseFloat(sut1) + parseFloat(suo1)
    susp.innerHTML = sutosp.toFixed(2) + cur
    sutosa = daily - sutosp
    susa.innerHTML = sutosa.toFixed(2) + cur
    ls.setItem(key2, sutosp)
    ls.setItem(key3, sutosa)


}
function moo2() {
    let key = "moo2"
    moo1 = moo.value
    ls.setItem(key, moo1)
    let key2 = "motosp"
    let key3 = "motosa"
    motosp = parseFloat(mof1) + parseFloat(moc1) + parseFloat(moa1) + parseFloat(mot1) + parseFloat(moo1)
    mosp.innerHTML = motosp.toFixed(2) + cur
    motosa = daily - motosp
    mosa.innerHTML = motosa.toFixed(2) + cur
    ls.setItem(key2, motosp)
    ls.setItem(key3, motosa)

}
function tuo2() {
    let key = "tuo2"
    tuo1 = tuo.value
    ls.setItem(key, tuo1)
    let key2 = "tutosp"
    let key3 = "tutosa"
    tutosp = parseFloat(tuf1) + parseFloat(tuc1) + parseFloat(tua1) + parseFloat(tut1) + parseFloat(tuo1)
    tusp.innerHTML = tutosp.toFixed(2) + cur
    tutosa = daily - tutosp
    tusa.innerHTML = tutosa.toFixed(2) + cur
    ls.setItem(key2, tutosp)
    ls.setItem(key3, tutosa)


}
function weo2() {
    let key = "weo2"
    weo1 = weo.value
    ls.setItem(key, weo1)
    let key2 = "wetosp"
    let key3 = "wetosa"
    wetosp = parseFloat(wef1) + parseFloat(wec1) + parseFloat(wea1) + parseFloat(wet1) + parseFloat(weo1)
    wesp.innerHTML = wetosp.toFixed(2) + cur
    wetosa = daily - wetosp
    wesa.innerHTML = wetosa.toFixed(2) + cur
    ls.setItem(key2, wetosp)
    ls.setItem(key3, wetosa)


}
function tho2() {
    let key = "tho2"
    tho1 = tho.value
    ls.setItem(key, tho1)
    let key2 = "thtosp"
    let key3 = "thtosa"
    thtosp = parseFloat(thf1) + parseFloat(thc1) + parseFloat(tha1) + parseFloat(tht1) + parseFloat(tho1)
    thsp.innerHTML = thtosp.toFixed(2) + cur
    thtosa = daily - thtosp
    thsa.innerHTML = thtosa.toFixed(2) + cur
    ls.setItem(key2, thtosp)
    ls.setItem(key3, thtosa)


}
function fro2() {
    let key = "fro2"
    fro1 = fro.value
    ls.setItem(key, fro1)
    let key2 = "frtosp"
    let key3 = "frtosa"
    frtosp = parseFloat(frf1) + parseFloat(frc1) + parseFloat(fra1) + parseFloat(frt1) + parseFloat(fro1)
    frsp.innerHTML = frtosp.toFixed(2) + cur
    frtosa = daily - frtosp
    frsa.innerHTML = frtosa.toFixed(2) + cur
    ls.setItem(key2, frtosp)
    ls.setItem(key3, frtosa)


}
function sao2() {
    let key = "sao2"
    sao1 = sao.value
    ls.setItem(key, sao1)
    let key2 = "satosp"
    let key3 = "satosa"
    satosp = parseFloat(saf1) + parseFloat(sac1) + parseFloat(saa1) + parseFloat(sat1) + parseFloat(sao1)
    sasp.innerHTML = satosp.toFixed(2) + cur
    satosa = daily - satosp
    sasa.innerHTML = satosa.toFixed(2) + cur
    ls.setItem(key2, satosp)
    ls.setItem(key3, satosa)


}
function suo2() {
    let key = "suo2"
    suo1 = suo.value
    ls.setItem(key, suo1)
    let key2 = "sutosp"
    let key3 = "sutosa"
    sutosp = parseFloat(suf1) + parseFloat(suc1) + parseFloat(sua1) + parseFloat(sut1) + parseFloat(suo1)
    susp.innerHTML = sutosp.toFixed(2) + cur
    sutosa = daily - sutosp
    susa.innerHTML = sutosa.toFixed(2) + cur
    ls.setItem(key2, sutosp)
    ls.setItem(key3, sutosa)


}
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let x1 = document.getElementById("x1")
function hideBut() {
    b1.className = ""
    b2.className = ""
    x1.className = ""
}
x1.addEventListener("click", hideBut)
b1.addEventListener("click", hideBut)
b2.addEventListener("click", hideBut)
function ConfirmSalary() {

    let salary = parseFloat(document.getElementById("inpsal").value)

    let bills = parseFloat(document.getElementById("inpbill").value)
    if (bills == undefined) { bills = 0 }
    let extraSaving = parseFloat(document.getElementById("extraSaving").value)
    let extraSpending = parseFloat(document.getElementById("extraSpending").value)
    totalsaving -= extraSpending
    totalsaving += extraSaving
    totalmosay.innerHTML = parseFloat(totalsaving).toFixed(2) + cur
    ls.setItem("totalsaving", totalsaving)
    ssalary += salary
    monthly += (salary - bills)
    bbills += bills
    ls.setItem("ssalary", ssalary)
    ls.setItem("bbills", bbills)

    document.getElementById("inpCon").style.visibility = "hidden"
    document.getElementById("inputScreen").style.visibility = "hidden"
    dailyFunc(monthly)
    daily = daily.toFixed(2)
    moto.innerHTML = "Total: " + daily + cur
    tuto.innerHTML = "Total: " + daily + cur
    weto.innerHTML = "Total: " + daily + cur
    thto.innerHTML = "Total: " + daily + cur
    frto.innerHTML = "Total: " + daily + cur
    sato.innerHTML = "Total: " + daily + cur
    suto.innerHTML = "Total: " + daily + cur
    document.getElementById("inpsal").value = 0
    document.getElementById("inpbill").value = 0
    document.getElementById("extraSaving").value = 0
    document.getElementById("extraSpending").value = 0
    let key = "daily"
    ls.setItem(key, daily)
    let key1 = "monthly"
    ls.setItem(key1, monthly)
    textsalary.innerHTML = "Salary: " + ssalary.toFixed(2) + cur
    textbills.innerHTML = "Bills: " + bbills.toFixed(2) + cur
    textamount.innerHTML = "Amount to spend: " + monthly.toFixed(2) + cur
}


function ShowSalaryDiv() {

    if (document.getElementById("inpCon").style.visibility == "visible") {
        document.getElementById("inpCon").style.visibility = "hidden"

        document.getElementById("inputScreen").style.visibility = "hidden"


    }
    else {
        document.getElementById("inpCon").style.visibility = "visible"
        document.getElementById("inputScreen").style.visibility = "visible"
        b1.className = "newbutton"
        b2.className = "newbutton"
        x1.className = "x"
    }
}
weekday()
function weekday() {
    var d = new Date();
    var n = d.getDay();
    if (n == 0) {
        sunday.classList.add("active");
        saturday.classList.remove("active")
    }
    else if (n == 1) {
        monday.classList.add("active");
        sunday.classList.remove("active")
    }
    else if (n == 2) {
        tuesday.classList.add("active");
        monday.classList.remove("active")
    }
    else if (n == 3) {
        wednesday.classList.add("active");
        tuesday.classList.remove("active")
    }
    else if (n == 4) {
        thursday.classList.add("active");
        wednesday.classList.remove("active")
    }
    else if (n == 5) {
        friday.classList.add("active");
        thursday.classList.remove("active")
    }
    else if (n == 6) {
        saturday.classList.add("active");
        friday.classList.remove("active")
    }

    var t = new Date()
    var m = t.getDate()
    var p = t.getMonth()
    if (parseFloat(m) < 10) { m = "0" + m }
    if (parseFloat(p + 1) < 10) { p = "0" + (parseFloat(p) + 1) }
    var date = m + "/" + p
    datetoday.innerHTML = date
    var b = t.getDate()
    b = parseFloat(b)
    var u = ""
    if (b < 8) { u = "week 1" }
    else if (b < 15) { u = "week 2" }
    else if (b < 22) { u = "week 3" }
    else if (b < 29) { u = "week 4" }
    else if (b == 29) { u = "week 4 / day 1" }
    else if (b == 30) { u = "week 4 / day 2" }
    else if (b == 31) { u = "week 4 / day 3" }
    weektoday.innerHTML = u
}

function dailyFunc(monthly) {
    var d = new Date();
    var n = d.getMonth();
    var y = d.getFullYear();
    console.log(y)
    if (n == 0 || n == 2 || n == 4 || n == 6 || n == 8 || n == 10) { daily = monthly / 31 }
    else if (n == 3 || n == 5 || n == 7 || n == 9 || n == 11) { daily = monthly / 30 }
    else if (y % 4 == 0) {
        daily = monthly / 29
    }
    else {
        daily = monthly / 28
    }
}
var intertimer = setInterval(weeklymoneySpent, 1000)
function weeklymoneySpent() {
    weeklysp = parseFloat(motosp) + parseFloat(tutosp) + parseFloat(wetosp) + parseFloat(thtosp) + parseFloat(frtosp) + parseFloat(satosp) + parseFloat(sutosp)
    totalmospw.innerHTML = weeklysp.toFixed(2) + cur
    weeklysa = parseFloat(motosa) + parseFloat(tutosa) + parseFloat(wetosa) + parseFloat(thtosa) + parseFloat(frtosa) + parseFloat(satosa) + parseFloat(sutosa)
    totalmosaw.innerHTML = weeklysa.toFixed(2) + cur
    var key = "weeklysp"
    var key1 = "weeklysa"
    ls.setItem(key, weeklysp)
    ls.setItem(key1, weeklysa)

}
function nextweek() {
    var key = "monthlysp"
    var key1 = "monthlysa"
    monthlysp = parseFloat(monthlysp)
    monthlysa = parseFloat(monthlysa)
    monthlysp += parseFloat(weeklysp)
    monthlysa += parseFloat(weeklysa)

    ls.setItem(key, monthlysp)
    ls.setItem(key1, monthlysa)
    weeklysa = 0
    weeklysp = 0
    totalmospm.innerHTML = monthlysp.toFixed(2) + cur
    totalmosam.innerHTML = monthlysa.toFixed(2) + cur
    ls.setItem("weeklysp", weeklysp)
    ls.setItem("weeklysa", weeklysa)

    totalmospw.innerHTML = weeklysp + cur
    totalmosaw.innerHTML = weeklysa + cur
    motosp = 0
    tutosp = 0
    wetosp = 0
    thtosp = 0
    frtosp = 0
    satosp = 0
    sutosp = 0
    motosa = 0
    tutosa = 0
    wetosa = 0
    thtosa = 0
    frtosa = 0
    satosa = 0
    sutosa = 0
    mof.value = 0
    tuf.value = 0
    wef.value = 0
    thf.value = 0
    frf.value = 0
    saf.value = 0
    suf.value = 0
    moc.value = 0
    tuc.value = 0
    wec.value = 0
    thc.value = 0
    frc.value = 0
    sac.value = 0
    suc.value = 0
    moa.value = 0
    tua.value = 0
    wea.value = 0
    tha.value = 0
    fra.value = 0
    saa.value = 0
    sua.value = 0
    mot.value = 0
    tut.value = 0
    wet.value = 0
    tht.value = 0
    frt.value = 0
    sat.value = 0
    sut.value = 0
    moo.value = 0
    tuo.value = 0
    weo.value = 0
    tho.value = 0
    fro.value = 0
    sao.value = 0
    suo.value = 0
    mof1 = 0
    tuf1 = 0
    wef1 = 0
    thf1 = 0
    frf1 = 0
    saf1 = 0
    suf1 = 0
    moc1 = 0
    tuc1 = 0
    wec1 = 0
    thc1 = 0
    frc1 = 0
    sac1 = 0
    suc1 = 0
    moa1 = 0
    tua1 = 0
    wea1 = 0
    tha1 = 0
    fra1 = 0
    saa1 = 0
    sua1 = 0
    mot1 = 0
    tut1 = 0
    wet1 = 0
    tht1 = 0
    frt1 = 0
    sat1 = 0
    sut1 = 0
    moo1 = 0
    tuo1 = 0
    weo1 = 0
    tho1 = 0
    fro1 = 0
    sao1 = 0
    suo1 = 0
    mosa.innerHTML = 0
    tusa.innerHTML = 0
    wesa.innerHTML = 0
    thsa.innerHTML = 0
    frsa.innerHTML = 0
    sasa.innerHTML = 0
    susa.innerHTML = 0
    mosp.innerHTML = 0
    tusp.innerHTML = 0
    wesp.innerHTML = 0
    thsp.innerHTML = 0
    frsp.innerHTML = 0
    sasp.innerHTML = 0
    susp.innerHTML = 0
    ls.setItem("motosp", motosp)
    ls.setItem("motosa", motosa)
    ls.setItem("tutosp", tutosp)
    ls.setItem("tutosa", tutosa)
    ls.setItem("wetosp", wetosp)
    ls.setItem("wetosa", wetosa)
    ls.setItem("thtosp", thtosp)
    ls.setItem("thtosa", thtosa)
    ls.setItem("frtosp", frtosp)
    ls.setItem("frtosa", frtosa)
    ls.setItem("satosp", satosp)
    ls.setItem("satosa", satosa)
    ls.setItem("sutosp", sutosp)
    ls.setItem("sutosa", sutosa)
    ls.setItem("mof", mof.value)
    ls.setItem("tuf", tuf.value)
    ls.setItem("wef", wef.value)
    ls.setItem("thf", thf.value)
    ls.setItem("frf", frf.value)
    ls.setItem("saf", saf.value)
    ls.setItem("suf", suf.value)
    ls.setItem("moc", moc.value)
    ls.setItem("tuc", tuc.value)
    ls.setItem("wec", wec.value)
    ls.setItem("thc", thc.value)
    ls.setItem("frc", frc.value)
    ls.setItem("sac", sac.value)
    ls.setItem("suc", suc.value)
    ls.setItem("moa", moa.value)
    ls.setItem("tua", tua.value)
    ls.setItem("wea", wea.value)
    ls.setItem("tha", tha.value)
    ls.setItem("fra", fra.value)
    ls.setItem("saa", saa.value)
    ls.setItem("sua", sua.value)
    ls.setItem("mot", mot.value)
    ls.setItem("tut", tut.value)
    ls.setItem("wet", wet.value)
    ls.setItem("tht", tht.value)
    ls.setItem("frt", frt.value)
    ls.setItem("sat", sat.value)
    ls.setItem("sut", sut.value)
    ls.setItem("moo", moo.value)
    ls.setItem("tuo", tuo.value)
    ls.setItem("weo", weo.value)
    ls.setItem("tho", tho.value)
    ls.setItem("fro", fro.value)
    ls.setItem("sao", sao.value)
    ls.setItem("suo", suo.value)
    ls.setItem("mof2", mof1)
    ls.setItem("tuf2", tuf1)
    ls.setItem("wef2", wef1)
    ls.setItem("thf2", thf1)
    ls.setItem("frf2", frf1)
    ls.setItem("saf2", saf1)
    ls.setItem("suf2", suf1)
    ls.setItem("moc2", moc1)
    ls.setItem("tuc2", tuc1)
    ls.setItem("wec2", wec1)
    ls.setItem("thc2", thc1)
    ls.setItem("frc2", frc1)
    ls.setItem("sac2", sac1)
    ls.setItem("suc2", suc1)
    ls.setItem("moa2", moa1)
    ls.setItem("tua2", tua1)
    ls.setItem("wea2", wea1)
    ls.setItem("tha2", tha1)
    ls.setItem("fra2", fra1)
    ls.setItem("saa2", saa1)
    ls.setItem("sua2", sua1)
    ls.setItem("mot2", mot1)
    ls.setItem("tut2", tut1)
    ls.setItem("wet2", wet1)
    ls.setItem("tht2", tht1)
    ls.setItem("frt2", frt1)
    ls.setItem("sat2", sat1)
    ls.setItem("sut2", sut1)
    ls.setItem("moo2", moo1)
    ls.setItem("tuo2", tuo1)
    ls.setItem("weo2", weo1)
    ls.setItem("tho2", tho1)
    ls.setItem("fro2", fro1)
    ls.setItem("sao2", sao1)
    ls.setItem("suo2", suo1)
}
function nextmonth() {
    var key = "totalspending"
    var key1 = "totalsaving"
    let key2 = "monthly"
    let key3 = "weeklysp"
    let key4 = "weeklysa"
    let key5 = "monthlysp"
    let key6 = "monthlysa"
    monthlysp += weeklysp
    monthlysa += weeklysa
    if (monthly < (monthlysa + monthlysp)) {
        totalsaving -= ((monthlysa + monthlysp) - monthly)
    }
    else if (monthly > (monthlysa + monthlysp)) {
        totalsaving += (monthly - (monthlysa + monthlysp))
    }
    totalspending += monthlysp
    totalsaving += monthlysa
    ls.setItem(key, totalspending)
    ls.setItem(key1, totalsaving)
    monthlysp = 0
    monthlysa = 0
    weeklysa = 0
    weeklysp = 0
    monthly = 0
    ls.setItem(key2, monthly)
    ls.setItem(key3, weeklysp)
    ls.setItem(key4, weeklysa)
    ls.setItem(key5, monthlysp)
    ls.setItem(key6, monthlysa)
    moto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    tuto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    weto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    thto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    frto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    sato.innerHTML = "Total: " + monthly.toFixed(2) + cur
    suto.innerHTML = "Total: " + monthly.toFixed(2) + cur
    totalmospy.innerHTML = parseFloat(totalspending).toFixed(2) + cur
    totalmosay.innerHTML = parseFloat(totalsaving).toFixed(2) + cur


    totalmospm.innerHTML = monthlysp.toFixed(2) + cur
    totalmosam.innerHTML = monthlysa.toFixed(2) + cur



    totalmospw.innerHTML = weeklysp.toFixed(2)
    totalmosaw.innerHTML = weeklysa.toFixed(2)
    motosp = 0
    tutosp = 0
    wetosp = 0
    thtosp = 0
    frtosp = 0
    satosp = 0
    sutosp = 0
    motosa = 0
    tutosa = 0
    wetosa = 0
    thtosa = 0
    frtosa = 0
    satosa = 0
    sutosa = 0
    mof.value = 0
    tuf.value = 0
    wef.value = 0
    thf.value = 0
    frf.value = 0
    saf.value = 0
    suf.value = 0
    moc.value = 0
    tuc.value = 0
    wec.value = 0
    thc.value = 0
    frc.value = 0
    sac.value = 0
    suc.value = 0
    moa.value = 0
    tua.value = 0
    wea.value = 0
    tha.value = 0
    fra.value = 0
    saa.value = 0
    sua.value = 0
    mot.value = 0
    tut.value = 0
    wet.value = 0
    tht.value = 0
    frt.value = 0
    sat.value = 0
    sut.value = 0
    moo.value = 0
    tuo.value = 0
    weo.value = 0
    tho.value = 0
    fro.value = 0
    sao.value = 0
    suo.value = 0
    mof1 = 0
    tuf1 = 0
    wef1 = 0
    thf1 = 0
    frf1 = 0
    saf1 = 0
    suf1 = 0
    moc1 = 0
    tuc1 = 0
    wec1 = 0
    thc1 = 0
    frc1 = 0
    sac1 = 0
    suc1 = 0
    moa1 = 0
    tua1 = 0
    wea1 = 0
    tha1 = 0
    fra1 = 0
    saa1 = 0
    sua1 = 0
    mot1 = 0
    tut1 = 0
    wet1 = 0
    tht1 = 0
    frt1 = 0
    sat1 = 0
    sut1 = 0
    moo1 = 0
    tuo1 = 0
    weo1 = 0
    tho1 = 0
    fro1 = 0
    sao1 = 0
    suo1 = 0
    mosa.innerHTML = 0
    tusa.innerHTML = 0
    wesa.innerHTML = 0
    thsa.innerHTML = 0
    frsa.innerHTML = 0
    sasa.innerHTML = 0
    susa.innerHTML = 0
    mosp.innerHTML = 0
    tusp.innerHTML = 0
    wesp.innerHTML = 0
    thsp.innerHTML = 0
    frsp.innerHTML = 0
    sasp.innerHTML = 0
    susp.innerHTML = 0
    ssalary = 0
    bbills = 0
    textsalary.innerHTML = "Salary: " + ssalary.toFixed(2) + cur
    textbills.innerHTML = "Bills: " + bbills.toFixed(2) + cur
    textamount.innerHTML = "Amount to spend: " + monthly.toFixed(2) + cur

}
storageAvailable()
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function clearAll() {
    let yes = prompt("Are you sure you want to clear all data? Write 'yes' to clear your local storage")
    if (yes == "yes") {
        alert("you have deleted the local storage!!!")
        ls.clear()
        location.reload(true)
    }
}

var select = document.getElementById("currency")
function currencyCheck() {
    if (select.value == 1) {
        cur = "&nbsp;Лв"
    }
    else if (select.value == 2) {
        cur = "&nbsp;€"
    }
    else if (select.value == 3) {
        cur = "&nbsp;$"
    }
    ls.setItem("cur", cur)
    innerhtml()
}