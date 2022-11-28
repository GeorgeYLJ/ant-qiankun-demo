<template>
    <div class="about">
        <el-card class="box-card" style="background-color: #333;height: 550px;overflow-y: scroll">
            <div class="map">
                <div class="city">
                    <div class="dotted"></div>
                    <div class="pulse1"></div>
                    <div class="pulse2"></div>
                    <div class="pulse3"></div>
                </div>
                <div class="city tb">
                    <div class="dotted"></div>
                    <div class="pulse1"></div>
                    <div class="pulse2"></div>
                    <div class="pulse3"></div>
                </div>
            </div>
        </el-card>
    </div>
</template>


<style>
    .map {
        position: relative;
        width: 747px;
        height: 616px;
        background: url(./../assets/map.png) no-repeat;
        background-size: 80%;
        margin: 0 auto;
    }

    .city {
        position: absolute;
        top: 176px;
        right: 286px;
        color: #fff;
    }

    .tb {
        top: 400px;
        right: 215px;
    }

    .dotted {
        width: 8px;
        height: 8px;
        background-color: #09f;
        border-radius: 50%;
    }

    .city div[class^="pulse"] {
        /* 保证我们小波纹在父盒子里面水平垂直居中 放大之后就会中心向四周发散 */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        box-shadow: 0 0 12px #009dfd;
        border-radius: 50%;
        animation: pulse 1.2s linear infinite;
    }

    .city div.pulse2 {
        animation-delay: 0.4s;
    }

    .city div.pulse3 {
        animation-delay: 0.8s;
    }

    @keyframes pulse {
        0% {
        }
        70% {
            /* transform: scale(5);  我们不要用scale 因为他会让 阴影变大*/
            width: 40px;
            height: 40px;
            opacity: 1;
        }
        100% {
            width: 70px;
            height: 70px;
            opacity: 0;
        }
    }
</style>
