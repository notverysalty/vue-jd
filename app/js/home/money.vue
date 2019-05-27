<template>
  <Panel :cname="$style.content" :title="title">
    <div :class="$style.chunk"> 
      <div :class="$style.item" v-for="item in arr" :key="item.id">
        <p :class="$style.title">
          <span>{{ item.title }}</span>
          <label>{{ item.label }}</label>
        </p>
        <p :class="$style.value">{{ item.value }}</p>
        <p :class="$style.desc">{{ item.desc }}</p>
      </div>
    </div>
  </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  export default {
    data() {
      return {
        title: '理财精选',
        arr: [
          {
            id: 1,
            title: '长乐盈',
            label: '180天可抵押',
            value: '5.80%',
            desc: '近一年历史化投资回报率'
          }, {
            id: 2,
            title: '京智0号',
            label: '大数据赋能',
            value: '6.00%',
            desc: '近一月历史化投资回报率'
          }, {
            id: 3,
            title: '建信养老飞益达',
            label: '1000起投',
            value: '4.57%',
            desc: '近7日年化收益'
          }, {
            id: 4,
            title: '小白基金',
            label: '超短期',
            value: '4.50%',
            desc: '7日年化收益率'
          }
        ]
      }
    },
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  .content {
    h4 {
      font-weight: 700;
    }
    .chunk{
      .item {
        width: 50%;
        padding-left: 32px;
        height: 218px;
        box-sizing: border-box;
        float: left;
        position: relative;
        .title{
          font-family: PingFangSC-Medium;
          color: #333;
          height: 42px;
          line-height: 42px;
          box-sizing: border-box;
          margin: 34px 0 16px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          span {
            color: #333;
            font-weight: 700;
            font-size: 30px;
            display: block;
            float: left;
            height: 42px;
            line-height: 42px;
          }
          label {
            height: 34px;
            line-height: 34px;
            font-size: 22px;
            padding: 0 8px;
            color: #FF5155;
            float: left;
            position: relative;
            top: 3px;
            left: 8px;
            text-align: center;
            &::before {
              min-width: 104px;
              line-height: 34px;
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: 200%;
              display: block;
              -webkit-transform: scale(.5,.5);
              -ms-transform: scale(.5,.5);
              transform: scale(.5,.5);
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
              box-sizing: border-box;
              border: 1px solid #FF5155;
            }
          }
        }
        .value {
          font-weight: 700;
          font-size: 44px;
          height: 58px;
          line-height: 58px;
          color: #FF5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;

        }
        .desc {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
</style>