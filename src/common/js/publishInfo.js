export default class PublishInfo {
  constructor({id, contacts, startAdd, endAdd, phone, publishType, publicationTime, startDate, startTime, plateNumber, remarks, seat, becomeDue}) {
    this.id = id
    this.contacts = contacts
    this.startAdd = startAdd
    this.endAdd = endAdd
    this.phone = phone
    this.publishType = publishType
    this.publicationTime = publicationTime
    this.startDate = startDate
    this.startTime = startTime
    this.plateNumber = plateNumber
    this.remarks = remarks
    this.seat = seat
    this.becomeDue = becomeDue
  }
}
