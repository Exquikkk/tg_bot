const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1283456650:AAE3EYVC9v-4ozx6vdmhbxopB4ebXSKJxH8'
const fs = require('fs')
const bot = new TelegramBot(TOKEN, {
  polling: true
})

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'Lets get it', {
    reply_markup: {
      resize_keyboard: true,
      keyboard: [
        ['Забирай до 85000 💰', '30000 - минимум вложений 💸'],
        ['Сидя дома от 25000 💵', '15000 за 5 минут 💳'],
        ['Казино 🎰']
      ]
    }
  })
})
bot.on('message', msg => {
  const {
    id
  } = msg.chat
  switch (msg.text) {
    
    case '30000 - минимум вложений 💸': {
      bot.sendMessage(id, 'НОВАЯ СХЕМА ЗАРАБОТКА \n\nАлгоритм протестирован и полностью фунционирует✅\n\n1. Переходим по ссылке👉 кнопка «казино»\n\n2. Регистрируемся, заполняем профиль, подтверждаем почту и номер телефона.  Регистрируемся через электронную почту. \n\n3. Пополняете баланс от⚠️200₽\n\n4. Затем находим игру\n« BOOK OF SUN - CHOICE ».\nЕсли не можете найти игру, скопируйте название и воспользуйтесь поиском на сайте!\n\n🕹 BET (ставка) 20 | 2 раза\n🕹 BET (ставка) 30 | 2 раза\n🕹 BET (ставка) 40  | 1 раз\n🕹 BET (ставка) 20 | 1 раз\n🕹 BET (ставка) 40 | 1 раз\n\n❗️Весь алгоритм крутим до четырех раз❗️ на каждый прокрут алгоритма пополняем счёт казино заново❗️, на выигранные и оставшиеся деньги на счёте играть нельзя!❗️\n\n🆘Играем только на реальные деньги, на демо схема НЕ работает т.к. там другие алгоритмы🆘\nВыигрыш: от 30 000 руб за один прокрут алгоритма\nА их может быть несколько!')
      bot.sendPhoto(id, fs.readFileSync(__dirname + '/faraon.jpg'))
    break;
    }
    case 'Забирай до 85000 💰' : {
      bot.sendMessage(id, 'НОВАЯ ЖИРНАЯ СХЕМА!!! СКОРЕЕ НАЛЕТАЕМ!!!\n\n🔥 СХЕМУ. С МИНИМАЛЬНЕЙШИМ ДЕПОЗИТОМ!\nВСЕГО🔥240🔥РУБЛЕЙ!!\n\nСамое время начать зарабатывать, больше таких алгоритмов не будет!\n\nРегистрироваться  и играть по кнопке «казино»\n\nДействуем строго по алгоритму:\n\nИгры «Crazy Monkey »\n\nСумма пополнения баланса 240 + руб.\n\n⚙️Алгоритм ставок:\nЛинии 1 | Ставка 5 | 4 раза\nЛинии 1 | Ставка 10 | 4 раза\nЛинии 9 | Ставка 90 | 2 раза\nЛовим выигрыш💰\n❗️Схему крутим 1 - 3 раз, на каждый прокрут пополняем баланс независимо есть деньги на счёте или нет!\n\n‼️Строго запрещено:\n▪️ Играть по схеме на демо счете, там действуют другие алгоритмы!\n▪️ Больше 85 000 рублей не выводить!')
      bot.sendPhoto(id, fs.readFileSync(__dirname + '/crazy.jpg'))
      break;
    }
    case 'Сидя дома от 25000 💵' : {
      bot.sendMessage(id, 'НОВАЯ СХЕМА ЗАРАБОТКА\n\nАлгоритм протестирован и полностью фунционирует✅\n\n1. Переходим по ссылке👉 кнопка «казино»\n\n2. Регистрируемся, заполняем профиль, подтверждаем почту и номер телефона.  Регистрируемся через электронную почту. \n\n3. После того, как пополнили баланс от❗️185₽, выбирайте вкладку «казино»\n\n4.  Затем заходим игру\n>> Rich Reels ».\nЕсли не можете найти игру, скопируйте название и воспользуйтесь поиском на сайте🔎\n\nℹ️Инструкция работает с телефона, компьютера\n📱Интерфейс на телефоне и компьютере отличается💻\n\n5. Дальше действуем строго по схеме:\n\n🕹 Ставка - 50 ₽ | Крутим 1 раз\n🕹 Ставка -  30 ₽  | Крутим 1 раз\n🕹 Ставка -  75 ₽  | Крутим 1 раз\n🕹 Ставка - 30 ₽ | Крутим 1 раз\n\n❗️Весь алгоритм крутим до пяти раз, на каждый прокрут алгоритма пополняем счёт казино заново, на выигранные и оставшиеся деньги на счёте играть нельзя! \n\n🆘Играем только на реальные деньги, на демо схема НЕ работает т.к. там другие алгоритмы🆘\n\nВыигрыш💲: от 20 000 руб за один прокрут алгоритма')
    }
    break;
    case '15000 за 5 минут 💳' : {
      bot.sendMessage(id, '\n\nНОВАЯ СХЕМА ЗАРАБОТКА\n\nАлгоритм протестирован и полностью фунционирует✅\n\n1. Переходим по ссылке👉 кнопка «казино»\n\n2. Регистрируемся, заполняем профиль, подтверждаем почту и номер телефона.  Регистрируемся через электронную почту. \n\n3. Пополняете  баланс от❗️200₽\n\n4. Затем заходим игру\n«Koi Princess».\n\nЕсли не можете найти игру, скопируйте название и воспользуйтесь поиском на сайте🔎\nℹ️Инструкция работает с телефона, компьютера\n📱Интерфейс на телефоне и компьютере отличается💻\n\n5. Дальше действуем строго по схеме:\n\n🕹 Достоинство монеты - всегда ставим 1!\n\n🕹 Ставка -  20 ₽ | Крутим 1раз\n🕹 Ставка -  40 ₽ | Крутим 1 раз\n🕹 Ставка -  60 ₽ | Крутим 1 раз\n🕹 Ставка -  80 ₽ | Крутим 1 раз\n\n❗️Схему крутим до четырех раз, на каждый прокрут алгоритма пополняем счёт казино заново, на выигранные и оставшиеся деньги на счёте играть нельзя!\n\n🆘Играем только на реальные деньги, на демо схема НЕ работает т.к. там другие алгоритмы🆘\n\nВыигрыш💲: от 15 000 руб за один прокрут алгоритма')
    }
    bot.sendPhoto(id, fs.readFileSync(__dirname + '/koi.jpg'))
    break;
    case 'Казино 🎰' : {
      bot.sendMessage(id, 'https://goo.su/2CKR')
      break;
    }
  }
})