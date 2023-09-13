import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    scheme: String(''),
    projects:[
      {
        id:1,
        name:'Solely Foot Care Inc',
        description:'A foot care clinic website that shows infomation, available services, google reviews, and instagram feeds. A contact form is found on the website that sends an email to the admin. The website is backed up by an admin page to maintain available services and prices.',
        techonology: [
          {
            key: '0',
            label: 'laravel 8.65',
          },
          {
            key: '1',
            label: 'bootstrap 4.3.1',
          },
          // {
          //   key: '2',
          //   label: 'composer',
          //   children: [
          //     { key: '2-0', label: 'Expenses.doc' },
          //     { key: '2-1', label: 'Resume.doc' }
          //   ]
          // }
      ],
        link:'https://solelyfootcareinc.ca',
        logo:'https://images.pexels.com/photos/3564304/pexels-photo-3564304.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria1.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria1s.jpg',
              alt: 'Description for Image 1',
              title: 'Title 1'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria2.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria2s.jpg',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria3.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria3s.jpg',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria4.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria4s.jpg',
              alt: 'Description for Image 4',
              title: 'Title 4'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria5.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria5s.jpg',
              alt: 'Description for Image 5',
              title: 'Title 5'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria6.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria6s.jpg',
              alt: 'Description for Image 6',
              title: 'Title 6'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria7.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria7s.jpg',
              alt: 'Description for Image 7',
              title: 'Title 7'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria8.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria8s.jpg',
              alt: 'Description for Image 8',
              title: 'Title 8'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria9.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria9s.jpg',
              alt: 'Description for Image 9',
              title: 'Title 9'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria10.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria10s.jpg',
              alt: 'Description for Image 10',
              title: 'Title 10'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria11.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria11s.jpg',
              alt: 'Description for Image 11',
              title: 'Title 11'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria12.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria12s.jpg',
              alt: 'Description for Image 12',
              title: 'Title 12'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria13.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria13s.jpg',
              alt: 'Description for Image 13',
              title: 'Title 13'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria14.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria14s.jpg',
              alt: 'Description for Image 14',
              title: 'Title 14'
          },
          {
              itemImageSrc: 'https://primevue.org/images/galleria/galleria15.jpg',
              thumbnailImageSrc: 'https://primevue.org/images/galleria/galleria15s.jpg',
              alt: 'Description for Image 15',
              title: 'Title 15'
          }
      ]    
      },
      {
        id:2,
        name:'Al Marsad',
        type:'News & Admin Page',
        techonology:'',
        description:'',
        link:'https://lebaneselw.com/',
        logo:'https://images.pexels.com/photos/3393375/pexels-photo-3393375.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:3,
        name:'iKnow',
        type:'Interactive App & Database',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/7092398/pexels-photo-7092398.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:3,
        name:'The Snake Game',
        type:'Interactive Game & Database',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/17817251/pexels-photo-17817251/free-photo-of-close-up-of-a-green-tree-python.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:4,
        name:'DigitalPen',
        type:'Interactive Game',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:5,
        name:'Global Clocks',
        type:'API Reading App',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:6,
        name:'Today in History',
        type:'API Reading App',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/6892703/pexels-photo-6892703.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        id:7,
        name:'LetsGo',
        type:'Full Stack App',
        techonology:'',
        description:'',
        link:'',
        logo:'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1600'
      }
    ]
  }),
  getters: {

  },
  actions: {
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (hasDarkPreference) {
        return 'dark';
      } else {
        return 'light';
      }
    },
    toggleMediaPreference(){
      this.scheme = this.scheme === 'dark' ? 'light' : 'dark';
      document.documentElement.className = this.scheme;
    },

  }
})
