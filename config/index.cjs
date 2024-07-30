/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxad546422fd990c74',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f2c2906c7894e4f6843b53b77347041c',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '茜茜宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKjm_6olLpBuLHz3b9uTh3IcUmqs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'U6AGm_s7OgBSI8Pq7dKL-nP8uPobwF6lQL3kC3skCOU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-12',
      horoscopeDateType:"今日",
      // openUrl:"#",
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝的生日', year: '2025', date: '03-12',
        },
        {
          type: '节日', name: '我们的七夕', year: '2024', date: '08-10',
        },
        {
          type: '节日', name: '相恋100天', year: '2024', date: '10-07',
        },
        {
          type: '节日', name: '我们第一个情人节', year: '2025', date: '02-14',
        },
        {
          type: '节日', name: '我们恋爱一周年', year: '2025', date: '06-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-06-29' },
        // 结婚纪念日
        { keyword: '100_day', date: '2022-09-09' },
      ],
    },
    
    {
      // 想要发送的人的名字
      name: '宝森',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKjm_6nrYcvEy6PEHgnv1Jp85Ih4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'U6AGm_s7OgBSI8Pq7dKL-nP8uPobwF6lQL3kC3skCOU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-01',
      horoscopeDateType:"今日",
      // openUrl:"#",
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝的生日', year: '2025', date: '03-12',
        },
        {
          type: '节日', name: '我们的七夕', year: '2024', date: '08-10',
        },
        {
          type: '节日', name: '相恋100天', year: '2024', date: '10-07',
        },
        {
          type: '节日', name: '我们第一个情人节', year: '2025', date: '02-14',
        },
        {
          type: '节日', name: '我们恋爱一周年', year: '2025', date: '06-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-06-29' },
        // 结婚纪念日
        { keyword: '100_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '8cE5UADe1KUWxzPsteA0iXXIKqSAGyOQGBUUN6ipWbU',

  CALLBACK_USERS: [
    {
      name: '乔宝森',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKjm_6nrYcvEy6PEHgnv1Jp85Ih4',
    }
  ],

}

module.exports = USER_CONFIG

