

let body = $response.body;
try {
    let obj = JSON.parse(body);

    // 计算当前时间戳 + 20 分钟（秒）
    let now = Math.floor(Date.now() / 1000) + 4800;

    // 修改 currentTime
    if (obj?.data?.currentTime) {
        obj.data.currentTime = now;
    }

    // 修改 coupon 信息
    if (obj?.data?.currentGrabCouponInfo?.coupon) {
        obj.data.currentGrabCouponInfo.coupon.forEach(c => {
            c.status = 2;
            c.couponStartTime = now;
        });
    }

    body = JSON.stringify(obj);
} catch (err) {
    console.log("脚本错误:", err);
}

$done({ body });
