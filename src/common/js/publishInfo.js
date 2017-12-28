export default class PublishInfo {
  constructor({openId, publishId, contacts, startAddress, endAddres, contactsPhone, publishType, publishTime, startDate, startTime, vacancy, remarks, seeNum, becomeDue, carNumber}) {
    this.openId = openId
    this.publishId = publishId
    this.contacts = contacts
    this.startAddress = startAddress
    this.endAddres = endAddres
    this.contactsPhone = contactsPhone
    this.publishType = publishType
    this.publishTime = publishTime
    this.startDate = startDate
    this.startTime = startTime
    this.vacancy = vacancy
    this.remarks = remarks
    this.seeNum = seeNum
    this.becomeDue = becomeDue
    this.carNumber = carNumber
  }
}
export function createPublishInfo (obj) {
  return new PublishInfo({
    openId : obj.openId,
    publishId : obj.publishId,
    contacts : obj.contacts,
    startAddress : obj.startAddress,
    endAddres : obj.endAddres,
    contactsPhone : obj.contactsPhone,
    publishType : obj.publishType,
    publishTime : obj.publishTime,
    startDate : obj.startDate,
    startTime : obj.startTime,
    vacancy : obj.vacancy,
    remarks : obj.remarks,
    seeNum : obj.seeNum,
    becomeDue : obj.becomeDue,
    carNumber : obj.carNumber
  })
}
