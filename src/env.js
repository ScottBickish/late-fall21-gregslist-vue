export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'scott-codeworks.us.auth0.com'
export const clientId = 'RCyA1uqr2CFegPI99M78Pp4D6sx08pJA'
export const audience = 'https://ScottDev.com'