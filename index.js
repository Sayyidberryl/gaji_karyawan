let gaji = 1500000;
let tunjangan = 500000;
let tunjangan2anak = 100000;
let anakkaryawan = 10;

if (anakkaryawan <1 ) {
    let pajak = (gaji + tunjangan) * 8/100
    console.log(gaji +tunjangan - pajak )
} else if (anakkaryawan >=1 && anakkaryawan <2 ) {
    let pajak2 = (gaji + tunjangan + tunjangan2anak) * 8/100
    console.log(gaji + tunjangan + tunjangan2anak - pajak2 )
} else{
    let pajak3 =  (gaji + tunjangan + tunjangan2anak * 2) * 8/100
    console.log(gaji +tunjangan + tunjangan2anak * 2 - pajak3)
}
