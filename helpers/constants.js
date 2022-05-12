/**
 * @type {import("@mantine/core").CSSObject}
 */
export const body = {
   display: 'flex',
   flex: 1,
   flexDirection: 'column',
   gap: '2rem',
   padding: '0 10px 20px 10px',
   '@media (min-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '1055px',
      width: '100%',
      justifyContent: 'center',
      margin: '0 auto'
   }
}
export const videoTag = {
   position: 'absolute',
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   zIndex: 5
}
export const videoContainer = {
   backgroundColor: '#36373a',
   display: 'grid',
   placeContent: 'center',
   position: 'relative',
   overflow: 'hidden',
   borderRadius: 10,
   // Para Barside component
   height: '100%'
}

export const initFormValues = {
   roomName: '',
   isPrivate: false
}

export const opt = data => ({
   body: JSON.stringify(data),
   method: 'POST',
   headers: {
      'Content-Type': 'application/json; charset=UTF-8'
   }
})

export const TWILIO_TOKEN_URL = process.env.NEXT_PUBLIC_TWILIO_TOKEN_URL
export const BACK_BASE_URL = process.env.NEXT_PUBLIC_URL_BACK

export const INITIAL_STATE = {
   isLoading: false,
   error: null,
   token: null,
   identity: null,
   roomName: null
}

export const COLORS = [
   'indigo',
   'blue',
   'cyan',
   'pink',
   'teal',
   'grape',
   'orange',
   'lime',
   'violet',
   'yellow',
   'red'
]

export const FRAMES = {
   1: {
      gridTemplate: '1fr / minmax(0, 1232px)',
      '@media (max-width: 1232px)': {
         gridTemplate: 'calc(100vw * 9 / 16) / 1fr'
      }
   },
   2: {
      gridTemplate: '.65fr / repeat(2, 1fr)',
      '@media (max-width: 1357px)': {
         gridTemplate: 'repeat(2, minmax(300px, 1fr)) / minmax(300px, 605px)'
      },
      '@media (max-width: 608px)': {
         gridTemplate: 'repeat(2, calc(100vw * 9 / 16)) / 1fr'
      }
   },
   3: {
      gridTemplate: 'repeat(2, 1fr) / repeat(2, minmax(0, 605px))',
      '& > div:last-child': {
         gridColumn: '1 / span 2',
         maxWidth: '605px',
         width: '100%',
         margin: '0 auto'
      },
      '@media (max-width: 1129px)': {
         gridTemplate: 'repeat(3, 1fr) / minmax(0, 366px)',
         '& > div:last-child': {
            gridColumn: 'unset',
            margin: 'unset'
         }
      }
   },
   4: {
      gridTemplate:
         'repeat(2, minmax(auto, 1fr)) / repeat(2, minmax(0, 605px))',
      '@media (max-width: 822px)': {
         gridTemplate: 'repeat(4, 1fr)/minmax(0, 366px)'
      }
   },
   5: {
      gridTemplate: 'repeat(2, 1fr) / repeat(3, minmax(0, 605px))',
      '@media  (max-width: 822px)': {
         gridTemplate:
            'repeat(3, minmax(0, 224.33px)) / repeat(2, minmax(0, 307px))',
         '& > div:last-child': {
            gridColumn: '1 / span 2',
            maxWidth: 'calc(100vw * 9 /16)',
            width: '100%',
            margin: '0 auto'
         }
      },
      '@media  (max-width: 629px)': {
         gridTemplate: 'repeat(5, 165.75px) / minmax(0, 307px)',
         '& > div:last-child': {
            gridColumn: 'unset',
            maxWidth: 605,
            width: '100%',
            margin: 'unset'
         }
      },
      '@media  (max-width: 560px)': {
         gridTemplate: 'repeat(5, minmax(0, 165.75px)) / minmax(0, 307px)'
      }
   },
   6: {
      gridTemplate: 'repeat(2, 1fr) / repeat(3, 1fr)',
      '@media  (max-width: 832px)': {
         gridTemplate:
            'repeat(3, minmax(0, 224.33px)) / repeat(2, minmax(0, 307px))'
      },
      '@media  (max-width: 560px)': {
         gridTemplate: 'repeat(6, minmax(0, 165.75px)) / minmax(0, 307px)'
      },
      '@media  (max-width: 320px)': {
         gridTemplate: 'repeat(6, minmax(0, 165.75px)) / minmax(0, 307px)'
      }
   },
   7: {
      gridTemplate: 'repeat(3, 1fr) / repeat(3, minmax(0, 605px))',
      '& > div:last-child': {
         gridColumn: '2 / 3',
         width: '100%'
      },
      '@media  (max-width: 822px)': {
         gridTemplate:
            'repeat(4, minmax(0, 165.75px)) / repeat(2, minmax(0, 307px))',
         '& > div:last-child': {
            gridColumn: '1 / 3',
            width: '100%',
            margin: '0 auto',
            maxWidth: '307px'
         }
      },
      '@media  (max-width: 629px)': {
         gridTemplate: 'repeat(7, minmax(0, 165.75px)) / minmax(0, 307px)',
         '& > div:last-child': {
            gridColumn: 'unset',
            maxWidth: 605,
            width: '100%',
            margin: 'unset'
         }
      },
      '@media  (max-width: 560px)': {
         gridTemplate: 'repeat(7, minmax(0, 165.75px)) / minmax(0, 307px)'
      }
   },
   8: {
      gridTemplate: 'repeat(2, 1fr) / repeat(4, minmax(0, 605px))',
      '@media  (max-width: 1340px)': {
         gridTemplate: 'repeat(4, 1fr) / repeat(2, minmax(0, 307px))'
      },
      '@media  (max-width: 657px)': {
         gridTemplate: 'repeat(8, 165.75px) / minmax(0, 307px)'
      }
   },
   9: {
      gridTemplate: 'repeat(3, 1fr) / repeat(3, minmax(0, 605px))',
      '@media  (max-width: 657px)': {
         gridTemplate: 'repeat(9, 165.75px) / minmax(0, 307px)'
      }
   }
}
