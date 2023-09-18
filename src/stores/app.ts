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
        link:'https://solelyfootcareinc.ca',
        logo:'https://images.pexels.com/photos/3564304/pexels-photo-3564304.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:2,
        name:'Al Marsad',
        type:'News & Admin Page',
        link:'https://lebaneselw.com/',
        logo:'https://images.pexels.com/photos/3393375/pexels-photo-3393375.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:3,
        name:'iKnow',
        type:'Interactive App & Database',
        link:'',
        logo:'https://images.pexels.com/photos/7092398/pexels-photo-7092398.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:3,
        name:'The Snake Game',
        type:'Interactive Game & Database',
        link:'',
        logo:'https://images.pexels.com/photos/17817251/pexels-photo-17817251/free-photo-of-close-up-of-a-green-tree-python.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:4,
        name:'DigitalPen',
        type:'Interactive Game',
        link:'',
        logo:'https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:5,
        name:'Global Clocks',
        type:'API Reading App',
        link:'',
        logo:'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:6,
        name:'Today in History',
        type:'API Reading App',
        link:'',
        logo:'https://images.pexels.com/photos/6892703/pexels-photo-6892703.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
      },
      {
        id:7,
        name:'LetsGo',
        type:'Full Stack App',
        link:'',
        logo:'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1600',
        screenshots:[
          {
              itemImageSrc: '/projects/solely/1.png',
              thumbnailImageSrc: '/projects/solely/1.png',
              alt: 'Moe Dayraki, solely pic 1',
              title: 'Solely 1'
          },
          {
              itemImageSrc: '/projects/solely/2.png',
              thumbnailImageSrc: '/projects/solely/2.png',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: '/projects/solely/3.png',
              thumbnailImageSrc: '/projects/solely/3.png',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: '/projects/solely/4.png',
              thumbnailImageSrc: '/projects/solely/4.png',
              alt: 'Description for Image 4',
              title: 'Title 4'
          }
      ]    
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
