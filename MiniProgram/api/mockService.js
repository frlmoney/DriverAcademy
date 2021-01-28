/**
 * 本地虚拟数据，模仿后台请求
 * @Author by LaFerrari
 * @DateTime 2021/1/27 11:29
 */
import Mock from "../plugin/mock/mock-min";

export const api = {
    getUserList: "/api/get/getUserList",
    getJoinMeetings: "/api/get/getJoinMeetings",
    getBookMeetings: "/api/get/bookMeetings",
};

export const request = (url, data = {}) => {
    if (url === api.getUserList) {
        const { current = 1, pageSize = 10 } = data;

        return new Promise((resolve) => {
            const mock = Mock.mock({
                status: 0,
                data: {
                    [`list|${pageSize}`]: [
                        {
                            "id|+1": (current - 1) * pageSize,
                            name: "@cname()",
                            date: "@date()",
                        },
                    ],
                    total: 100,
                },
            });
            setTimeout(() => {
                resolve(mock);
            }, 500);
        });
    }

    if (url === api.getJoinMeetings) {
        const { current = 1, pageSize = 10 } = data;

        return new Promise((resolve) => {
            const mock = Mock.mock({
                status: 0,
                data: {
                    [`list|${pageSize}`]: [
                        {
                            "id|+1": (current - 1) * pageSize,
                            theme: "@ctitle(3,8)",
                            name: "@cname()",
                            time: "@time()",
                        },
                    ],
                    total: 100,
                },
            });
            setTimeout(() => {
                resolve(mock);
            }, 1000);
        });
    }

    if (url === api.getBookMeetings) {
        const { current = 1, pageSize = 10 } = data;
        return new Promise((resolve) => {
            const mock = Mock.mock({
                status: 0,
                data: {
                    [`list|${pageSize}`]: [
                        {
                            "id|+1": (current - 1) * pageSize,
                            theme: "@ctitle(3,8)",
                            name: "@cname()",
                            time: "@time()",
                        },
                    ],
                    total: 60,
                },
            });
            setTimeout(() => {
                resolve(mock);
            }, 1000);
        });
    }
};
