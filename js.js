let ad = prompt(`Adınız: `)
let soyad = prompt(`Soyadınız: `)
if ((ad == "Kübra" || ad == "kübra") && (soyad == "inan" || soyad == "İnan")) {
    window.alert(`Hoşgeldin hatunum ❤`)
} else window.alert(`Hoşgeldin ${ad} ${soyad}!`)
