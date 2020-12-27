module.exports = {
  positionX: 'end',
  positionY: 'bottom',
  speed: 1000,
  methods: [
    {
      purple: function (title, message) {
        this.title = title
        this.message = message
        this.color = 'purple'
        this.font = 'gray'
        this.fontTone = '100'
        this.icon = 'fas fa-bell'
        return this
      }
    }
  ]
}
