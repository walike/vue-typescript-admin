import { Commit } from 'vuex';
import { getBookList } from '@/api/book';
const state: any = {
    bookList: {},
};

const getters: any = {
    bookList: () => state.bookList,
};

const mutations: any = {
    saveBookList(states: any, data: any) {
        states.bookList = data;
      }
};
const actions: any = {
    // 调用api获取数据
    // async bookList(context: { commit: Commit }, data: any) {
    //     console.log('通过action获取bookList数据');
    //     const res: any = await getBookList(data, null);
    //     context.commit('saveBookList', res.Data);
    // },
    // 获取假数据
    async bookList(context: { commit: Commit }) {
        console.log('通过action获取bookList数据');
        const res: any = {
            Total: 3,
            List: [
                {
                    ID: 234,
                    CreatedAt: "2019-07-02T13:38:32Z",
                    UpdatedAt: "2019-07-02T13:38:32Z",
                    DeletedAt: null,
                    Name: "鲁滨逊漂流记",
                    Count: "2",
                    Author: "鲁滨逊",
                    Type: "冒险"
                },
                {
                    ID: 236,
                    CreatedAt: "2019-07-02T13:39:00Z",
                    UpdatedAt: "2019-07-02T13:39:00Z",
                    DeletedAt: null,
                    Name: "红楼梦",
                    Count: "6",
                    Author: "曹雪芹",
                    Type: "言情"
                },
                {
                    ID: 237,
                    CreatedAt: "2019-07-02T13:39:32Z",
                    UpdatedAt: "2019-07-02T13:39:32Z",
                    DeletedAt: null,
                    Name: "西游记",
                    Count: "3",
                    Author: "吴承恩",
                    Type: "玄幻"
                },
            ]
        };
        context.commit('saveBookList', res);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};