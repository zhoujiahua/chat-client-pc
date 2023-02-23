<template>
  <div class="chatHome">
    <div class="chatLeft">
      <div class="title">
        <div class="avatar">
          <el-avatar :size="80" :src="avatar"></el-avatar>
        </div>
        <!--        <h1>Open AI</h1>-->
        <!--        <br />-->
        <!--        <p>Welcome, please open your first experience!</p>-->
      </div>
      <div class="online-person">
        <span class="onlin-text">聊天列表</span>
        <div class="person-cards-wrapper">
          <div
              class="personList"
              v-for="personInfo in personList"
              :key="personInfo.id"
              @click="clickPerson(personInfo)"
          >
            <PersonCard
                :personInfo="personInfo"
                :pcCurrent="pcCurrent"
            ></PersonCard>
          </div>
        </div>
      </div>
    </div>
    <div class="chatRight">
      <router-view></router-view>
      <div v-if="showChatWindow">
        <ChatWindow
            :frinedInfo="chatWindowInfo"
            @personCardSort="personCardSort"
        ></ChatWindow>
      </div>
      <div class="showIcon" v-else>
        <!--        <span class="iconfont icon-snapchat"></span>-->
        <img src="@/assets/img/snapchat.png" alt=""/>
      </div>
    </div>
    <!--     <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
  </div>
</template>

<script>
import avatar from "@/assets/img/logo-cc.png"
import PersonCard from "@/components/PersonCard.vue";
import ChatWindow from "./chatwindow.vue";

import {getFriend} from "@/api/getData";

export default {
  name: "App",
  components: {
    PersonCard,
    ChatWindow,
  },
  data() {
    return {
      avatar,
      pcCurrent: "",
      personList: [],
      showChatWindow: false,
      chatWindowInfo: {},
    };
  },
  mounted() {
    getFriend().then((res) => {
      console.log(res);
      this.personList = res;
    });
  },
  methods: {
    clickPerson(info) {
      this.showChatWindow = true;
      this.chatWindowInfo = info;
      this.personInfo = info;
      this.pcCurrent = info.id;
    },
    personCardSort(id) {
      if (id !== this.personList[0].id) {
        console.log(id);
        let nowPersonInfo;
        for (let i = 0; i < this.personList.length; i++) {
          if (this.personList[i].id == id) {
            nowPersonInfo = this.personList[i];
            this.personList.splice(i, 1);
            break;
          }
        }
        this.personList.unshift(nowPersonInfo);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chatHome {
  // margin-top: 20px;
  display: flex;

  .chatLeft {
    width: 280px;

    .title {
      color: #fff;
      padding-left: 10px;
    }

    .online-person {
      margin-top: 60px;

      .onlin-text {
        padding-left: 10px;
        color: rgb(176, 178, 189);
      }

      .person-cards-wrapper {
        padding-left: 10px;
        height: 65vh;
        margin-top: 20px;
        overflow: hidden;
        overflow-y: scroll;
        box-sizing: border-box;

        &::-webkit-scrollbar {
          width: 0; /* Safari,Chrome 隐藏滚动条 */
          height: 0; /* Safari,Chrome 隐藏滚动条 */
          display: none; /* 移动端、pad 上Safari，Chrome，隐藏滚动条 */
        }
      }
    }
  }

  .chatRight {
    flex: 1;
    //border-radius:5px;
    padding: 10px 30px 0;
    border-left: 1px solid #C0C4CC;
    //background-color:#C0C4CC;

    .showIcon {
      position: absolute;
      top: calc(50% - 150px); /*垂直居中 */
      left: calc(50% - 50px); /*水平居中 */
      .icon-snapchat {
        width: 300px;
        height: 300px;
        font-size: 300px;
        // color: rgb(28, 30, 44);
      }
    }
  }
}
</style>
