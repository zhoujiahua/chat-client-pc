<template>
  <div class="chatHome">
    <div class="chatLeft">
      <div class="title">
        <div class="avatar">
          <el-avatar :size="80" :src="avatar"></el-avatar>
        </div>
      </div>
      <div class="online-person">
        <div class="onlin-text">
          <strong>服务技师列表</strong>
        </div>
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
        />
      </div>
      <div class="showIcon" v-else>
        <iframe src="/static/cs.html" frameborder="0" class="ifr"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { getFriend } from "@/api/getData";
import ChatWindow from "./chat-window.vue";
import avatar from "@/assets/img/logo-cc.png";
import PersonCard from "@/components/PersonCard.vue";

export default {
  name: "HomeChat",
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
  display: flex;

  .chatLeft {
    width: 280px;

    .title {
      color: #fff;
      display: flex;
      flex-direction: row;
      padding: 20px 0 10px;
      justify-content: center;
    }

    .online-person {
      color: #fff;
      text-align: center;

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
    width: 100%;
    min-height: 100%;
    margin-left: 20px;

    .showIcon {
      width: 100%;
      height: 100%;
      .ifr {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>
