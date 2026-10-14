const DNAtoRNA = (string) => {
    let re = /T/gi;
    let newstr = string.replace(re, "U");
    return  alert(newstr);
}

let say = prompt("Say a DNA combination: (some A, G, C, T)");
DNAtoRNA(say);
