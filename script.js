const canvas = document.getElementById("batikCanvas");
const ctx = canvas.getContext("2d");

const motif = document.getElementById("motif");
const iteration = document.getElementById("iteration");
const size = document.getElementById("size");
const spacing = document.getElementById("spacing");

const mainColor = document.getElementById("mainColor");
const accentColor = document.getElementById("accentColor");
const lineColor = document.getElementById("lineColor");

const fabricColor = document.getElementById("fabricColor");
const textureColor = document.getElementById("textureColor");
const texture = document.getElementById("texture");

const webBg1 = document.getElementById("webBg1");
const webBg2 = document.getElementById("webBg2");

const iterationValue =
    document.getElementById("iterationValue");

const sizeValue =
    document.getElementById("sizeValue");

const spacingValue =
    document.getElementById("spacingValue");

const status =
    document.getElementById("status");


/* =====================================================
   LABEL
===================================================== */

function updateLabels() {

    iterationValue.textContent =
        iteration.value;

    sizeValue.textContent =
        size.value;

    spacingValue.textContent =
        spacing.value;
}


/* =====================================================
   WARNA
===================================================== */

function getColors() {

    return {
        main: mainColor.value,
        accent: accentColor.value,
        line: lineColor.value,
        fabric: fabricColor.value,
        texture: textureColor.value
    };

}


/* =====================================================
   BACKGROUND WEBSITE
===================================================== */

function updateWebsiteBackground() {

    document.body.style.background =
        `linear-gradient(
            145deg,
            ${webBg1.value},
            ${webBg2.value}
        )`;
}


/* =====================================================
   LATAR KAIN
===================================================== */

function drawFabric(colors) {

    ctx.fillStyle =
        colors.fabric;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    if (!texture.checked) {
        return;
    }


    /*
       Tekstur serat kain
    */

    ctx.save();

    ctx.globalAlpha = 0.08;

    ctx.strokeStyle =
        colors.texture;

    ctx.lineWidth = 0.6;


    for (
        let x = 0;
        x < canvas.width;
        x += 7
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(
            x,
            canvas.height
        );

        ctx.stroke();
    }


    for (
        let y = 0;
        y < canvas.height;
        y += 7
    ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(
            canvas.width,
            y
        );

        ctx.stroke();
    }


    ctx.restore();
}


/* =====================================================
   MOTIF KAWUNG
===================================================== */

function drawKawung(x, y, r, colors) {

    ctx.save();

    ctx.translate(x, y);


    /*
       Empat oval utama
       khas pola Kawung
    */

    for (let i = 0; i < 4; i++) {

        ctx.save();

        ctx.rotate(
            i * Math.PI / 2
        );


        ctx.beginPath();

        ctx.ellipse(
            0,
            -r * 0.42,
            r * 0.25,
            r * 0.43,
            0,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            i % 2 === 0
                ? colors.main
                : colors.accent;


        ctx.fill();


        ctx.strokeStyle =
            colors.line;

        ctx.lineWidth = 2;

        ctx.stroke();


        ctx.restore();
    }


    /*
       Belah ketupat tengah
    */

    ctx.beginPath();

    ctx.moveTo(
        0,
        -r * 0.16
    );

    ctx.lineTo(
        r * 0.16,
        0
    );

    ctx.lineTo(
        0,
        r * 0.16
    );

    ctx.lineTo(
        -r * 0.16,
        0
    );

    ctx.closePath();


    ctx.fillStyle =
        colors.line;

    ctx.fill();


    ctx.restore();
}


/* =====================================================
   MOTIF CEPLOK
===================================================== */

function drawCeplok(x, y, r, colors) {

    ctx.save();

    ctx.translate(x, y);


    for (let i = 0; i < 4; i++) {

        ctx.save();

        ctx.rotate(
            i * Math.PI / 2
        );


        ctx.beginPath();

        ctx.moveTo(
            0,
            -r * 0.48
        );

        ctx.lineTo(
            r * 0.18,
            -r * 0.18
        );

        ctx.lineTo(
            0,
            0
        );

        ctx.lineTo(
            -r * 0.18,
            -r * 0.18
        );

        ctx.closePath();


        ctx.fillStyle =
            i % 2 === 0
                ? colors.main
                : colors.accent;


        ctx.fill();


        ctx.strokeStyle =
            colors.line;

        ctx.lineWidth = 2;

        ctx.stroke();


        ctx.restore();
    }


    ctx.beginPath();

    ctx.arc(
        0,
        0,
        r * 0.13,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        colors.line;

    ctx.fill();


    ctx.restore();
}


/* =====================================================
   MOTIF TRUNTUM
===================================================== */

function drawTruntum(x, y, r, colors) {

    ctx.save();

    ctx.translate(x, y);


    for (let i = 0; i < 8; i++) {

        const angle =
            i * Math.PI / 4;


        const px =
            Math.cos(angle) *
            r *
            0.35;


        const py =
            Math.sin(angle) *
            r *
            0.35;


        ctx.beginPath();

        ctx.arc(
            px,
            py,
            r * 0.12,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            i % 2 === 0
                ? colors.main
                : colors.accent;


        ctx.fill();


        ctx.strokeStyle =
            colors.line;

        ctx.lineWidth = 1.5;

        ctx.stroke();
    }


    ctx.beginPath();

    ctx.arc(
        0,
        0,
        r * 0.10,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        colors.line;

    ctx.fill();


    ctx.restore();
}


/* =====================================================
   MOTIF PARANG
===================================================== */

function drawParang(x, y, r, colors) {

    ctx.save();

    ctx.translate(x, y);

    ctx.rotate(
        -Math.PI / 5
    );


    ctx.beginPath();

    ctx.moveTo(
        -r * 0.55,
        0
    );


    ctx.bezierCurveTo(
        -r * 0.20,
        -r * 0.42,
        r * 0.20,
        -r * 0.42,
        r * 0.55,
        0
    );


    ctx.bezierCurveTo(
        r * 0.20,
        r * 0.42,
        -r * 0.20,
        r * 0.42,
        -r * 0.55,
        0
    );


    ctx.closePath();


    ctx.fillStyle =
        colors.main;

    ctx.fill();


    ctx.strokeStyle =
        colors.line;

    ctx.lineWidth = 2;

    ctx.stroke();


    /*
       Garis dalam Parang
    */

    ctx.beginPath();

    ctx.moveTo(
        -r * 0.32,
        0
    );

    ctx.quadraticCurveTo(
        0,
        -r * 0.18,
        r * 0.32,
        0
    );


    ctx.strokeStyle =
        colors.accent;

    ctx.lineWidth = 3;

    ctx.stroke();


    ctx.restore();
}


/* =====================================================
   PILIH MOTIF
===================================================== */

function drawMotif(
    type,
    x,
    y,
    r,
    colors
) {

    if (type === "kawung") {

        drawKawung(
            x,
            y,
            r,
            colors
        );

    }


    else if (type === "ceplok") {

        drawCeplok(
            x,
            y,
            r,
            colors
        );

    }


    else if (type === "truntum") {

        drawTruntum(
            x,
            y,
            r,
            colors
        );

    }


    else if (type === "parang") {

        drawParang(
            x,
            y,
            r,
            colors
        );

    }

}


/* =====================================================
   ⭐ INTI BATIK FRAKTAL
===================================================== */

/*
    Motif utama dibuat terlebih dahulu.

    Kemudian motif yang sama dibuat
    dalam ukuran lebih kecil DI DALAM
    area motif utama.

    Jadi bentuk Kawung/Ceplok/etc.
    tetap terlihat jelas.
*/

function fractalMotif(
    type,
    x,
    y,
    r,
    level,
    colors
) {

    /*
       BASE CASE

       Rekursi berhenti ketika
       level sudah habis.
    */

    if (
        level <= 0 ||
        r < 5
    ) {

        return;
    }


    /*
       1. Gambar motif utama
    */

    drawMotif(
        type,
        x,
        y,
        r,
        colors
    );


    /*
       Jika sudah iterasi terakhir,
       tidak membuat motif anak.
    */

    if (level === 1) {

        return;
    }


    /*
       2. Buat motif yang lebih kecil
    */

    const childSize =
        r * 0.30;


    /*
       Jarak dibuat kecil agar
       motif anak tetap berada
       di dalam motif induk.
    */

    const distance =
        r * 0.34;


    const children = [

        [0, -distance],

        [distance, 0],

        [0, distance],

        [-distance, 0]

    ];


    /*
       3. Panggil fungsi ini lagi
       untuk setiap motif anak.
    */

    for (
        const [dx, dy]
        of children
    ) {

        fractalMotif(

            type,

            x + dx,

            y + dy,

            childSize,

            level - 1,

            colors

        );

    }

}


/* =====================================================
   POLA BATIK KESELURUHAN
===================================================== */

function generatePattern(colors) {

    const r =
        Number(size.value);


    const gap =
        Number(spacing.value);


    const level =
        Number(iteration.value);


    /*
       Jarak antar motif besar.

       Sengaja dibuat lebih longgar
       supaya motif tidak bertabrakan.
    */

    const step =
        r *
        (2.15 + gap * 0.55);


    const rows =
        Math.ceil(
            canvas.height / step
        ) + 2;


    const columns =
        Math.ceil(
            canvas.width / step
        ) + 2;


    /*
       Membuat pola seperti kain batik.
    */

    for (
        let row = 0;
        row < rows;
        row++
    ) {

        const y =
            r +
            row * step;


        for (
            let col = 0;
            col < columns;
            col++
        ) {

            const x =
                r +
                col * step;


            /*
               Baris ganjil digeser sedikit
               agar pola lebih natural.
            */

            const offset =
                row % 2 === 0
                    ? 0
                    : step * 0.5;


            fractalMotif(

                motif.value,

                x + offset,

                y,

                r,

                level,

                colors

            );

        }

    }

}


/* =====================================================
   BORDER KAIN
===================================================== */

function drawBorder(colors) {

    ctx.save();


    /*
       Border luar
    */

    ctx.strokeStyle =
        colors.line;

    ctx.lineWidth = 12;


    ctx.strokeRect(
        7,
        7,
        canvas.width - 14,
        canvas.height - 14
    );


    /*
       Border dalam
    */

    ctx.strokeStyle =
        colors.accent;

    ctx.lineWidth = 3;


    ctx.strokeRect(
        22,
        22,
        canvas.width - 44,
        canvas.height - 44
    );


    ctx.restore();
}


/* =====================================================
   GENERATE UTAMA
===================================================== */

function generate() {

    const colors =
        getColors();


    updateWebsiteBackground();

    updateLabels();


    /*
       1. Latar kain
    */

    drawFabric(
        colors
    );


    /*
       2. Pola batik fraktal
    */

    generatePattern(
        colors
    );


    /*
       3. Bingkai
    */

    drawBorder(
        colors
    );


    status.textContent =
        `Fraktal ${iteration.value} tingkat ✨`;
}


/* =====================================================
   KONVERSI WARNA
===================================================== */

function hexToRgb(hex) {

    hex =
        hex.replace(
            "#",
            ""
        );


    return {

        r:
            parseInt(
                hex.substring(0, 2),
                16
            ),

        g:
            parseInt(
                hex.substring(2, 4),
                16
            ),

        b:
            parseInt(
                hex.substring(4, 6),
                16
            )

    };

}


function rgbToHex(
    r,
    g,
    b
) {

    return "#" +

        [
            r,
            g,
            b
        ]

        .map(
            value =>

                Math.max(
                    0,
                    Math.min(
                        255,
                        Math.round(value)
                    )
                )

                .toString(16)
                .padStart(2, "0")
        )

        .join("");

}


/* =====================================================
   WARNA OTOMATIS
===================================================== */

function autoColor() {

    const base =
        hexToRgb(
            mainColor.value
        );


    /*
       Aksen lebih terang
    */

    accentColor.value =
        rgbToHex(

            base.r +
            (255 - base.r) * 0.35,

            base.g +
            (255 - base.g) * 0.35,

            base.b +
            (255 - base.b) * 0.35

        );


    /*
       Garis lebih gelap
    */

    lineColor.value =
        rgbToHex(

            base.r * 0.35,

            base.g * 0.35,

            base.b * 0.35

        );


    /*
       Latar kain dibuat lembut
       mengikuti warna utama.
    */

    fabricColor.value =
        rgbToHex(

            245 -
            (255 - base.r) * 0.08,

            240 -
            (255 - base.g) * 0.08,

            220 -
            (255 - base.b) * 0.04

        );


    /*
       Warna tekstur kain
    */

    textureColor.value =
        rgbToHex(

            base.r * 0.65 + 80,

            base.g * 0.65 + 70,

            base.b * 0.65 + 50

        );


    generate();
}


/* =====================================================
   WARNA RANDOM
===================================================== */

function randomHex() {

    return "#" +

        Math.floor(
            Math.random() *
            16777215
        )

        .toString(16)

        .padStart(
            6,
            "0"
        );

}


function randomize() {

    const motifs = [

        "kawung",

        "ceplok",

        "truntum",

        "parang"

    ];


    motif.value =
        motifs[
            Math.floor(
                Math.random() *
                motifs.length
            )
        ];


    /*
       Iterasi dibatasi
       agar motif tetap terbaca.
    */

    iteration.value =
        Math.floor(
            Math.random() * 3
        ) + 1;


    size.value =
        Math.floor(
            Math.random() * 45
        ) + 70;


    spacing.value =
        (
            Math.random() * 0.5 +
            0.9
        ).toFixed(1);


    /*
       Warna utama random
    */

    mainColor.value =
        randomHex();


    /*
       Background website
    */

    webBg1.value =
        randomHex();

    webBg2.value =
        randomHex();


    /*
       Sesuaikan warna lainnya
    */

    autoColor();
}


/* =====================================================
   DOWNLOAD
===================================================== */

function downloadPNG() {

    const link =
        document.createElement("a");


    link.download =
        "batik-fraktal.png";


    link.href =
        canvas.toDataURL(
            "image/png"
        );


    link.click();
}


/* =====================================================
   EVENT
===================================================== */

document
    .getElementById("generate")
    .addEventListener(
        "click",
        generate
    );


document
    .getElementById("randomize")
    .addEventListener(
        "click",
        randomize
    );


document
    .getElementById("download")
    .addEventListener(
        "click",
        downloadPNG
    );


document
    .getElementById("autoColor")
    .addEventListener(
        "click",
        autoColor
    );


[
    motif,
    iteration,
    size,
    spacing,
    mainColor,
    accentColor,
    lineColor,
    fabricColor,
    textureColor,
    webBg1,
    webBg2,
    texture

].forEach(
    element => {

        element.addEventListener(
            "input",
            generate
        );

        element.addEventListener(
            "change",
            generate
        );

    }
);


/* =====================================================
   MULAI
===================================================== */

updateLabels();

updateWebsiteBackground();

generate();