"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,

  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Clock,
  ArrowRight,
  Shield,
} from "lucide-react"


// Interface para componentes SVG personalizados
interface SVGIconProps {
  className?: string;
}

// SVGs minimalistas para áreas de atuação
const PrevidenciarioIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
  fill="#fff"
  viewBox="0 0 512.001 512.001" className={className}>
    <path d="M508.503,305.716c-1.844-3.004-5.049-4.798-8.574-4.798h-1.786l-72.268-159.214h16.919c11.34,0,20.566-9.226,20.566-20.566c0-11.34-9.226-20.566-20.566-20.566h-164.54v-27.08c10.765-7.204,17.87-19.47,17.87-33.368C296.124,18,278.124,0,256,0c-22.124,0-40.124,18-40.124,40.124c0,13.898,7.104,26.164,17.87,33.368v27.079H69.205c-11.341,0-20.566,9.226-20.566,20.566c0,11.34,9.226,20.566,20.566,20.566h16.919L13.856,300.917H12.07c-3.525,0-6.73,1.794-8.574,4.798c-1.844,3.004-1.992,6.675-0.395,9.82l13.062,25.709c5.057,9.955,15.136,16.14,26.303,16.14h115.563c11.167,0,21.245-6.184,26.303-16.14l13.061-25.707c1.598-3.143,1.451-6.813-0.392-9.819c-1.844-3.005-5.05-4.8-8.576-4.8h-1.785l-72.268-159.214h119.373v280.66h-54.267c-13.322,0-24.16,10.838-24.16,24.16v13.133h-12.017c-13.322,0-24.16,10.838-24.16,24.159v20.659c0,4.156,3.369,7.526,7.526,7.526h258.665c4.157,0,7.526-3.369,7.526-7.526v-20.659c0-13.321-10.838-24.159-24.16-24.159h-12.017v-13.133c0-13.322-10.838-24.16-24.16-24.16h-54.267V205.032c0-4.156-3.369-7.526-7.526-7.526c-4.157,0-7.526,3.369-7.526,7.526v217.331h-14.407V134.178c0-4.156-3.369-7.526-7.526-7.526H69.205c-3.041,0-5.515-2.474-5.515-5.515c0-3.041,2.474-5.515,5.515-5.515H241.27c4.157,0,7.526-3.369,7.526-7.526V79.607c0.281,0.051,0.565,0.089,0.848,0.134c0.144,0.023,0.287,0.047,0.43,0.068c0.483,0.071,0.969,0.132,1.456,0.186c0.18,0.02,0.36,0.043,0.541,0.06c0.458,0.044,0.918,0.076,1.378,0.105c0.202,0.013,0.403,0.031,0.606,0.04c0.573,0.027,1.147,0.04,1.721,0.044c0.075,0,0.148,0.006,0.223,0.006c0.075,0,0.149-0.005,0.223-0.006c0.574-0.003,1.148-0.016,1.721-0.044c0.203-0.01,0.404-0.028,0.606-0.04c0.46-0.029,0.92-0.061,1.378-0.105c0.181-0.018,0.361-0.04,0.542-0.06c0.487-0.054,0.972-0.114,1.455-0.185c0.144-0.021,0.287-0.045,0.43-0.068c0.282-0.045,0.567-0.083,0.848-0.134v28.489c0,4.156,3.369,7.526,7.526,7.526h172.065c3.041,0,5.515,2.474,5.515,5.515s-2.474,5.515-5.515,5.515H270.729c-4.157,0-7.526,3.369-7.526,7.526v35.178c0,4.156,3.369,7.526,7.526,7.526c4.157,0,7.526-3.369,7.526-7.526v-27.653h119.373L325.36,300.917h-1.785c-3.526,0-6.732,1.795-8.576,4.8c-1.843,3.006-1.99,6.677-0.393,9.818l13.062,25.709c5.057,9.955,15.136,16.14,26.303,16.14h115.563c11.167,0,21.245-6.184,26.303-16.14l13.063-25.71C510.496,312.391,510.348,308.72,508.503,305.716z M332.522,437.415c5.022,0,9.108,4.086,9.108,9.108v13.133H226.478c-4.157,0-7.526,3.369-7.526,7.526c0,4.156,3.369,7.526,7.526,7.526h142.22c5.022,0,9.108,4.086,9.108,9.108v13.133H134.193v-13.133c0-5.022,4.086-9.108,9.108-9.108h48.249c4.157,0,7.526-3.369,7.526-7.526c0-4.156-3.369-7.526-7.526-7.526h-21.181v-13.133c0-5.023,4.086-9.108,9.108-9.108H332.522z M170.913,334.427c-2.477,4.876-7.414,7.905-12.884,7.905H42.467c-5.47,0-10.407-3.029-12.884-7.905l-9.378-18.458h160.086L170.913,334.427z M170.201,300.917H30.295l69.953-154.114L170.201,300.917z M267.121,62.588c-0.274,0.136-0.551,0.265-0.828,0.391c-0.141,0.064-0.281,0.131-0.424,0.192c-0.314,0.135-0.631,0.26-0.949,0.382c-0.244,0.093-0.491,0.182-0.739,0.268c-0.261,0.091-0.523,0.182-0.787,0.264c-0.24,0.074-0.484,0.14-0.727,0.207c-0.184,0.051-0.368,0.103-0.554,0.15c-0.251,0.063-0.505,0.12-0.759,0.176c-0.186,0.04-0.372,0.08-0.558,0.116c-0.249,0.048-0.498,0.093-0.75,0.134c-0.207,0.034-0.415,0.063-0.623,0.091c-0.232,0.032-0.464,0.064-0.698,0.089c-0.259,0.028-0.521,0.048-0.782,0.068c-0.188,0.015-0.375,0.033-0.563,0.043c-0.458,0.025-0.917,0.04-1.379,0.04c-0.462,0-0.922-0.015-1.379-0.04c-0.189-0.01-0.376-0.028-0.563-0.043c-0.261-0.02-0.522-0.04-0.782-0.068c-0.234-0.025-0.466-0.057-0.698-0.089c-0.208-0.028-0.416-0.058-0.623-0.091c-0.251-0.041-0.501-0.086-0.75-0.134c-0.187-0.036-0.373-0.076-0.558-0.116c-0.254-0.055-0.508-0.112-0.759-0.176c-0.185-0.047-0.369-0.099-0.554-0.15c-0.243-0.067-0.487-0.133-0.727-0.207c-0.264-0.082-0.525-0.173-0.787-0.264c-0.248-0.086-0.495-0.174-0.739-0.268c-0.318-0.122-0.635-0.247-0.949-0.382c-0.143-0.061-0.283-0.128-0.424-0.192c-0.277-0.126-0.554-0.254-0.828-0.391c-8.26-4.106-13.952-12.631-13.952-22.464c0-13.825,11.247-25.073,25.073-25.073c13.826,0,25.073,11.248,25.073,25.073C281.073,49.957,275.382,58.482,267.121,62.588z M411.752,146.803l69.953,154.114H341.798L411.752,146.803z M482.417,334.427c-2.477,4.876-7.414,7.905-12.884,7.905H353.97c-5.47,0-10.407-3.029-12.884-7.905l-9.378-18.458h160.086L482.417,334.427z"/>
  </svg>
)

const TrabalhistaIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="#fff"
  id="Layer_1" viewBox="0 0 512 512" className={className}>
    <path clipRule="evenodd" d="m252.07 165.19c-4.2 0-8.22.71-11.96 2.01v-10.8c0-6.58 5.39-11.96 11.96-11.96 6.58 0 11.96 5.39 11.96 11.96v10.8c-3.76-1.3-7.76-2.01-11.96-2.01zm-11.96 70.76v86.48h23.92v-86.48c-3.77 1.3-7.77 2.01-11.96 2.01s-8.22-.71-11.96-2.01zm39.35 102.95h-54.77c-7.03 0-12.76 5.75-12.76 12.76v12.76h80.28v-12.76c0-7.01-5.75-12.76-12.75-12.76zm-27.39-117.41c10.97 0 19.9-8.96 19.9-19.9 0-10.97-8.93-19.93-19.9-19.93s-19.93 8.96-19.93 19.93c.01 10.94 8.96 19.9 19.93 19.9zm-175.69-63.16v34.19h58.93v-34.19c0-4.54 3.69-8.22 8.22-8.22 4.56 0 8.25 3.69 8.25 8.22v34.19h23.95c4.85 0 8.84-4 8.84-8.87v-27.81c0-23.3-12.7-43.8-31.55-54.85-12.22 11.79-28.86 19.05-47.2 19.05s-34.95-7.26-47.2-19.05c-18.82 11.05-31.55 31.55-31.55 54.85v27.81c0 4.88 4 8.87 8.87 8.87h23.92v-34.19c0-4.54 3.69-8.22 8.25-8.22 4.59 0 8.27 3.69 8.27 8.22zm29.45-54.76c28.37 0 51.53-23.16 51.53-51.53s-23.15-51.54-51.53-51.54-51.51 23.16-51.51 51.53 23.14 51.54 51.51 51.54zm321.48 351.78v1.13c0 12.78-10.4 23.22-23.19 23.22h-15.39c-12.81 0-23.22-10.43-23.22-23.22v-1.13l-50.88-6.29c-.31-.06-.62-.08-.94-.14v52.61c0 5.5 4.68 9.98 10.4 9.98h144.65c5.73 0 10.38-4.48 10.38-9.98v-52.61c-.31.06-.62.08-.94.14zm47.62-78.92h-157.04c-5.5 0-9.98 4.48-9.98 9.98v36.37c0 5.07 3.71 9.3 8.76 9.92l48.84 6.04v-10.83c0-12.81 10.4-23.22 23.22-23.22h15.39c12.78 0 23.19 10.4 23.19 23.22v10.83l48.87-6.04c5.02-.62 8.73-4.85 8.73-9.92v-36.37c0-5.5-4.48-9.98-9.98-9.98zm-70.81 86.77c3.69 0 6.72-3 6.72-6.72v-28.57c0-3.71-3.03-6.75-6.72-6.75h-15.39c-3.71 0-6.75 3.03-6.75 6.75v28.57c0 3.71 3.03 6.72 6.75 6.72zm41.62-103.27v-8.65c0-5.33-2.18-10.18-5.7-13.69-3.49-3.49-8.33-5.67-13.66-5.67h-59.9c-5.33 0-10.18 2.18-13.69 5.67-3.49 3.51-5.67 8.36-5.67 13.69v8.65h16.47v-8.65c0-.79.34-1.5.85-2.04.54-.51 1.25-.85 2.04-.85h59.9c.77 0 1.5.34 2.01.85.54.54.85 1.25.85 2.04v8.65zm-115.34-233.4c8.39 3.09 16.53 6.92 24.29 11.51 40.62 22.85 70.21 59.24 85.21 101.08 6.38-40.99-3.83-84.42-31.8-119.34-15.97-19.93-35.92-34.78-57.78-44.39l11.82-30.3-77.61 34.1 34.07 77.61zm-156.68 271.39c-8.36-3.12-16.5-6.95-24.29-11.51-40.62-22.85-70.21-59.24-85.21-101.11-6.38 40.99 3.83 84.42 31.83 119.34 15.96 19.93 35.89 34.81 57.74 44.42l-11.79 30.27 77.61-34.07-34.1-77.64zm179.15-82.43c8.67 0 15.73-7.06 15.73-15.73v-15.73h-66.78v15.73c0 8.67 7.09 15.73 15.73 15.73zm-29.62-77.39-13.12 29.45h18l7.09-15.93 7.11 15.93h17.97l-12.08-27.1c6.12 0 11.34-.6 15.22-1.84 4.34-1.33 6.77-5.95 5.41-10.29s-5.95-6.77-10.29-5.41c-4.51 1.42-12.08 1.56-21.29.6-.74-.2-1.53-.28-2.32-.25-4.54-.54-9.41-1.33-14.46-2.35-10.94-2.21-22.56-5.47-33.36-9.64-1.5 5.47-4.25 10.43-7.94 14.54 12.27 4.88 25.6 8.67 38.07 11.2 2.02.38 4.04.75 5.99 1.09zm-154.06-14.85c-.79-.03-1.59.06-2.35.25-9.18.96-16.75.82-21.26-.6-4.34-1.36-8.96 1.08-10.32 5.41-1.33 4.34 1.08 8.96 5.41 10.29 3.91 1.25 9.13 1.84 15.22 1.84l-12.08 27.1h18l7.09-15.93 7.11 15.93h18l-13.15-29.45c1.98-.34 3.97-.71 6.01-1.11 12.47-2.52 25.79-6.32 38.04-11.2-3.69-4.11-6.44-9.07-7.94-14.54-10.8 4.17-22.42 7.43-33.34 9.64-5.06 1.03-9.91 1.83-14.44 2.37zm-33.68 76.5c0 8.67 7.09 15.73 15.73 15.73h35.35c8.65 0 15.7-7.06 15.7-15.73v-15.73h-66.78z" fillRule="evenodd"/>
  </svg>
)

const CivilIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="#fff"
  id="Layer_1" height="512" viewBox="0 0 248.386 237.182" width="512" className={className}>
    <g>
      <path d="m165.892 14.576c-28.834 0-54.198 14.803-68.947 37.213 2.877 2.518 5.872 6.01 8.572 10.874 11.97-20.956 34.515-35.091 60.375-35.091 38.383 0 69.5 31.115 69.5 69.5 0 38.383-31.117 69.5-69.5 69.5-20.431 0-38.801-8.818-51.518-22.854-1.729 4.214-5.435 7.38-9.938 8.372 15.105 16.861 37.036 27.479 61.455 27.479 45.561 0 82.494-36.936 82.494-82.496.001-45.563-36.933-82.497-82.493-82.497z"/>
      <path d="m57.683 134.546h4.637v90.27c0 6.832 5.537 12.365 12.365 12.365 6.826 0 12.363-5.533 12.363-12.365v-150.002c3.467 7.1 6.998 20.703 6.965 44.92 0 5.516-.178 11.572-.568 18.223-.26 4.41 3.106 8.197 7.518 8.455.16.008.318.014.475.014 4.205-.002 7.731-3.281 7.981-7.533.406-6.934.594-13.301.594-19.158-.012-22.658-2.77-37.664-6.877-48.045-4.054-10.338-9.855-16.174-15.234-18.842-3.416-1.722-6.414-2.109-8.221-2.133-.119-.005-.238-.018-.359-.018h-26.561c.004.219.007.476.008.806-.015 3.917-.446 15.505-5.408 28.774l-5.538-2.332c4.512-12.225 4.961-22.989 4.946-26.442 0-.359-.004-.62-.009-.806h-6.077c-.478 0-.943.05-1.397.133l.001.009c-3.088.348-5.767 1.559-8.111 3.106-2.763 1.848-5.152 4.26-7.215 7.109-4.088 5.687-6.922 13.246-6.94 21.842-.01 6.436 1.672 13.41 5.572 20.1 3.891 6.699 9.926 13.072 18.375 18.721 1.365.914 2.912 1.354 4.444 1.354 2.577 0 5.11-1.248 6.653-3.553 2.457-3.672 1.473-8.642-2.201-11.099-6.777-4.541-10.939-9.167-13.439-13.464-2.49-4.309-3.395-8.327-3.404-12.059-.004-3.486.836-6.736 2.119-9.43 1.264-2.686 3.018-4.777 4.393-5.836.428-.343.792-.56 1.07-.7l.185 2.261c-1.048.805-2.651 2.607-3.835 5.127-1.27 2.66-1.934 5.621-1.932 8.576.006 1.967.287 3.88.842 5.771l3.568-8.474 30.989 13.053-16.65 39.533-30.988-13.048 3.462-8.221c-2.065-2.405-3.868-4.908-5.381-7.509-3.832-6.578-5.852-13.877-5.84-21.107.015-8.289 2.611-16.461 7.313-23.006 2.271-3.139 4.871-5.693 7.728-7.605 2.849-1.881 6.135-3.071 9.058-3.463l.001.018c.51-.082 1.028-.137 1.56-.137h14.636c-5.285-1.128-14.397-2.856-20.28-2.773-1.519.021-2.826.16-3.791.465-6.332 2-24 14-30.5 49.5-4.888 26.693 15.243 47.589 30.208 51.213v-20.678l2 .842v97.549c0 6.832 5.536 12.365 12.364 12.365 5.281 0 9.778-3.318 11.549-7.981.519-1.364.814-2.838.814-4.384z"/>
      <circle cx="60.001" cy="22.5" r="22.5"/>
      <path d="m50.686 82.66h2.326v22.743h-2.326z" transform="matrix(.388 -.922 .922 .388 -54.935 105.317)"/>
      <path d="m48.881 86.946h2.325v22.745h-2.325z" transform="matrix(.387 -.922 .922 .387 -59.981 106.398)"/>
      <path d="m114.243 104.376h-1.663c2.095 10.252 11.582 17.991 22.966 17.991 11.389 0 20.873-7.739 22.969-17.991h-1.665l-19.543-39.456h57.16l-19.535 39.456h-1.669c2.1 10.252 11.584 17.991 22.971 17.991 11.389 0 20.873-7.739 22.969-17.991h-1.665l-19.543-39.456h8.594v-5.254h-81.399v5.254h8.59zm60.963 1.548h3.602c2.262 6.978 6.963 12.371 13.636 14.576-8.147-1.355-14.897-6.99-17.238-14.576zm1.957-1.548 19.069-38.513 19.072 38.513zm-62.646 1.548h3.602c2.262 6.978 6.964 12.371 13.639 14.576-8.15-1.354-14.9-6.99-17.241-14.576zm1.958-1.548 19.068-38.513 19.075 38.513z"/>
      <path d="m179.294 134.07h-10.867l.002-65.98h-5.076v65.98h-10.868v3.567h-6.136v4.681h39.082v-4.681h-6.137z"/>
    </g>
  </svg>
)

const TributarioIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    fill="#fff"
      id="Layer_1" viewBox="0 0 512 512" className={className}>
    <path clipRule="evenodd" d="m464.329 150.259v4.994c0 3.345-2.729 6.074-6.074 6.074h-34.04c-3.345 0-6.074-2.729-6.074-6.074v-4.994zm-116.627-90.968c31.356 0 56.775 25.419 56.775 56.775 0 31.355-25.419 56.774-56.774 56.774-31.356 0-56.775-25.419-56.775-56.775-.001-31.355 25.418-56.774 56.774-56.774zm18.336 67.944c-5.962 0-10.793 4.831-10.793 10.793s4.831 10.793 10.793 10.793 10.793-4.831 10.793-10.793c0-5.963-4.831-10.793-10.793-10.793zm-36.672-43.924c-5.962 0-10.793 4.831-10.793 10.793s4.831 10.793 10.793 10.793 10.793-4.831 10.793-10.793c0-5.963-4.83-10.793-10.793-10.793zm34.677-3.38-45.223 62.934c-2.571 3.572-1.76 8.554 1.812 11.125 3.573 2.571 8.554 1.76 11.125-1.812l45.223-62.934c2.571-3.573 1.76-8.554-1.812-11.125-3.573-2.572-8.554-1.761-11.125 1.812zm-345.28 299.127 66.448 117.409c.879 1.553 2.911 2.137 4.47 1.255l22.901-12.983c1.238-.891 1.711-2.574 1.105-3.976l-66.599-117.713c-.878-1.551-2.908-2.135-4.465-1.256l-22.605 12.793c-1.554.88-2.137 2.913-1.255 4.471zm95.102 67.153-38.46-67.957 58.828-34.06c25.987-15.045 32.741-12.777 59.074-3.257 18.479 6.68 41.971 15.173 66.249 19.631 7.198 2.539 12.046 9.698 9.996 17.355-2.296 8.57-9.038 10.962-17.273 9.958-17.592-3.645-34.807-9.241-52.164-13.891-4.584-1.225-9.292 1.498-10.517 6.082s1.498 9.293 6.082 10.517c20.792 5.571 43.233 12.961 64.453 15.961 14.671 2.291 28.364.171 41.266-7.343l80.555-46.919c10.299-5.998 36.596-19.033 45.699-4.366 3.974 6.404 3.211 17.967-3.508 22.103l-146.172 90.007c-11.45 7.048-23.762 8.591-36.704 5.122l-106.034-28.412c-2.52-.673-5.078-.153-7.074 1.214zm-65.401-62.977c.645 4.41-2.407 8.507-6.817 9.152s-8.507-2.408-9.152-6.817c-.645-4.41 2.407-8.507 6.817-9.152s8.507 2.407 9.152 6.817zm153.29-64.199h291.896v-12.522c0-3.345-2.729-6.074-6.074-6.074h-279.748c-3.345 0-6.074 2.729-6.074 6.074zm21.558-47.326h248.78c3.346 0 6.074 2.729 6.074 6.074v6.656h-260.929v-6.656c0-3.345 2.729-6.074 6.075-6.074zm200.902-27.068h34.04c3.346 0 6.074 2.729 6.074 6.074v4.994h-46.188v-4.994c0-3.345 2.728-6.074 6.074-6.074zm-93.532 0h34.04c3.346 0 6.074 2.729 6.074 6.074v4.994h-46.189v-4.994c0-3.345 2.729-6.074 6.075-6.074zm-93.533 0h34.40c3.346 0 6.074 2.729 6.074 6.074v4.994h-46.189v-4.994c.001-3.345 2.73-6.074 6.075-6.074zm-67.949-202.612c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm7.898 97.176c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm0 40.747c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm33.554-23.193h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-40.747 0h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-51.604-63.392c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm0 40.747c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm33.554-23.192h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8 0-4.419-3.582-8-8-8zm-40.747 0h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8 0-4.419-3.582-8-8-8zm58.092-28.146c0-4.418 3.582-8 8-8s8 3.582 8 8v10.362c0 4.418-3.582 8-8 8s-8-3.582-8-8zm33.554-23.192h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-40.747 0h-10.362c-4.418 0-8 3.582-8 8s3.582 8 8 8h10.362c4.418 0 8-3.582 8-8s-3.582-8-8-8zm289.042 117.743v51.314h-19.63v-51.314zm-93.532 10.852v40.462h-19.63v-40.462c3.211.433 6.486.662 9.815.662 3.329-.001 6.604-.229 9.815-.662zm-93.533-10.852v51.314h-19.63v-51.314zm214.182-60.593v11.45c0 3.345-2.729 6.074-6.074 6.074-17.97 0-35.939 0-53.909 0 1.444-5.608 2.231-11.479 2.285-17.525h57.698zm-200.945 17.525c-17.97 0-35.94 0-53.909 0-3.345 0-6.074-2.729-6.074-6.074v-11.45h57.699c.054 6.045.84 11.916 2.284 17.524zm72.995-119.697c-1.597-.929-3.431-.929-5.028 0l-132.109 76.851c-4.401 2.56-2.577 9.322 2.514 9.322h60.959c7.042-32.826 36.224-57.443 71.15-57.443s64.108 24.618 71.15 57.443h60.958c5.091 0 6.915-6.761 2.514-9.322zm-72.952 135.697v4.994c0 3.345-2.729 6.074-6.074 6.074h-34.04c-3.346 0-6.074-2.729-6.074-6.074v-4.994z" fillRule="evenodd"/>
  </svg>
)

const PublicoEstatutarioIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"
  fill="#fff"
  
  className={className}>
    <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/>
  </svg>
)

import Image from "next/image"
import dynamic from "next/dynamic"
import { useCityConfig } from "@/hooks/use-city-config"
import CitySelector from "@/components/CitySelector"
import DevCityTester from "@/components/DevCityTester"

// Lazy load agressivo de componentes para reduzir bundle inicial
const GoogleMapComponent = dynamic(() => import("@/components/GoogleMap"), {
  loading: () => <div className="h-64 bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
    <span className="text-gray-300">Carregando mapa...</span>
  </div>,
  ssr: false
})


// Componente inline para o popup de cookies para evitar bundle adicional
function InlineCookiePopup({ 
  showCookiePopup, 
  handleAcceptCookies, 
  handleRejectCookies 
}: {
  showCookiePopup: boolean;
  handleAcceptCookies: () => void;
  handleRejectCookies: () => void;
}) {
  if (!showCookiePopup) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <div className="flex items-start space-x-3">
              <div className="bg-[#e2ba4b] p-2 rounded-full flex-shrink-0">
                <Shield className="h-5 w-5 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  Utilizamos cookies
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Este site utiliza cookies para melhorar sua experiência de navegação e fornecer funcionalidades personalizadas. 
                  Ao continuar navegando, você concorda com nossa política de cookies.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleRejectCookies}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAcceptCookies}
              className="px-4 py-2 text-sm font-medium bg-[#e2ba4b] hover:bg-[#d4a93a] text-black rounded-lg transition-colors shadow-sm"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AbraoSilvaAdvocacia() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showCookiePopup, setShowCookiePopup] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const { cityConfig, changeCity } = useCityConfig()
  const observerRef = useRef<IntersectionObserver | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const rafRef = useRef<number | null>(null)

  // Memoizar funções para reduzir garbage collection
  const handleScroll = useCallback(() => {
      // Cancelar RAF anterior se existir
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      // Usar RAF para otimizar performance
      rafRef.current = requestAnimationFrame(() => {
        const sections = ["localizacao", "contato", "areas-atuacao", "informacoes"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      })
  }, [])

  useEffect(() => {
    let cookieTimer: NodeJS.Timeout | null = null

    // Configurar Intersection Observer para animações de scroll
    const setupScrollAnimations = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      // Observar todos os elementos com classes de scroll reveal
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
      )
      scrollElements.forEach((el) => {
        observerRef.current?.observe(el)
      })
    }

    // Configurar animações após o componente carregar
    const loadTimer = setTimeout(() => {
      setIsLoaded(true)
      setupScrollAnimations()
      
      // Revelar elementos que já estão na tela imediatamente
      const elementsInView = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      elementsInView.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('revealed')
        }
      })
    }, 100)

    // Verificar cookies DEPOIS de configurar as animações
    try {
      const cookiePreference = localStorage.getItem('cookiePreference')
      if (!cookiePreference) {
        // Mostrar popup após 2 segundos se não há preferência salva
        cookieTimer = setTimeout(() => {
          setShowCookiePopup(true)
        }, 2000)
      }
    } catch (error) {
      console.warn('Erro ao acessar localStorage:', error)
      // Fallback: mostrar popup se não conseguir acessar localStorage
      cookieTimer = setTimeout(() => {
        setShowCookiePopup(true)
      }, 2000)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observerRef.current?.disconnect()
      clearTimeout(loadTimer)
      if (cookieTimer) {
        clearTimeout(cookieTimer)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const handleMenuClick = (item: any) => {
    if (item.type === "external") {
      window.open(item.href, "_blank", "noopener,noreferrer")
    } else {
      const element = document.getElementById(item.id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem('cookiePreference', 'accepted')
      localStorage.setItem('cookieAcceptedAt', new Date().toISOString())
      setShowCookiePopup(false)
    } catch (error) {
      console.warn('Erro ao salvar preferência de cookies:', error)
      setShowCookiePopup(false)
    }
  }

  const handleRejectCookies = () => {
    try {
      localStorage.setItem('cookiePreference', 'rejected')
      localStorage.setItem('cookieRejectedAt', new Date().toISOString())
      setShowCookiePopup(false)
    } catch (error) {
      console.warn('Erro ao salvar preferência de cookies:', error)
      setShowCookiePopup(false)
    }
  }

  
  // Função para limpar dados de cookies (para desenvolvimento)
  const clearCookieData = () => {
    try {
      localStorage.removeItem('cookiePreference')
      localStorage.removeItem('cookieAcceptedAt')
      localStorage.removeItem('cookieRejectedAt')
      setShowCookiePopup(true)
    } catch (error) {
    }
  }

  const menuItems = [
    { label: "Localização", id: "localizacao", key: "localizacao", type: "scroll" },
    { label: "Entre em Contato", id: "contato", key: "contato", type: "scroll" },
    { label: "Áreas de Atuação", id: "areas-atuacao", key: "areas-atuacao", type: "scroll" },
    { label: "Informações", id: "informacoes", key: "informacoes", type: "scroll" },
    { label: "Equipe", href: "https://abraoesilvaadvogados.com.br/equipe-2/", key: "equipe", type: "external" },
    { label: "Dúvidas", href: "https://abraoesilvaadvogados.com.br/duvidas/", key: "duvidas", type: "external" }
  ]

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/abraoesilvaadvogados/" 
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/p/Abrão-e-Silva-AdvogadosAssociados-100065542987803/" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://www.youtube.com/@abraoesilvaadvogados" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://br.linkedin.com/company/abrao-e-silva-advogados-associados" 
    }
  ]

  return (
    <div className="bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                className="h-8 w-auto md:h-12"
                width={100}
                height={100}
                priority
                quality={85}
              />
            </div>

            {/* Center - Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
                              {menuItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleMenuClick(item)}
                    className={`${
                      item.key === 'localizacao' 
                        ? 'text-[#e2ba4b] hover:text-white' 
                        : 'text-white hover:text-[#e2ba4b]'
                    } transition-all duration-300 font-medium text-sm btn-hover-scale animate-slideInDown`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
            </nav>

            {/* Right Side - Social Icons */}
             <div className="hidden md:flex items-center space-x-3 ">
               {socialLinks.map((social) => {
                 const IconComponent = social.icon;
                 return (
                   <a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 border border-gray-600 rounded-lg hover:border-[#e2ba4b] hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group animate-float"
                     aria-label={social.name}
                     style={{ animationDelay: `${socialLinks.indexOf(social) * 0.2}s` }}
                   >
                     <IconComponent className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                   </a>
                 );
               })}
             </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-white" />
              ) : (
                <Menu className="h-7 w-7 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              <div className="py-4 space-y-4">
                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-6 pb-6 ">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-4 rounded-lg hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group animate-bounce-gentle"
                        aria-label={social.name}
                        style={{ animationDelay: `${socialLinks.indexOf(social) * 0.1}s` }}
                      >
                        <IconComponent className="h-7 w-7 text-white group-hover:text-black transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
                
              
                {/* Mobile Menu Items */}
                {menuItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleMenuClick(item)}
                    className={`block w-full text-left px-4 py-2 ${
                      item.key === 'localizacao' 
                        ? 'text-[#e2ba4b] hover:bg-white hover:text-black' 
                        : 'text-white hover:bg-[#e2ba4b] hover:text-black'
                    } transition-all duration-300 font-medium btn-hover-scale animate-fadeInLeft`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 pt-16 md:pt-20">

        
        {/* Localização Section */}
        <section id="localizacao" className="py-12 md:py-16 lg:py-24 bg-gray-50 location-bg paper-money-effect">
          <div className="container mx-auto px-4">
              {/* Seletor de Cidade */}
              <div className=" flex  mb-8 justify-center z-9999">
                <CitySelector 
                  currentCity={cityConfig} 
                  onCityChange={changeCity}
                />
              </div>
            <div className={`text-center mb-12 md:mb-16 scroll-reveal ${isLoaded ? 'animate-fadeInUp' : ''}`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 inline-block relative">
                Nossa localização em <span className="text-[#ffffff]">{cityConfig.displayName}</span>
                <span
                  className="block absolute left-0 -bottom-1 w-full h-1 bg-black"
                  style={{ transform: 'translateY(100%)' }}
                  aria-hidden="true"
                ></span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 mt-6">
                {cityConfig.subtitle}
              </p>
              
            
            </div>

            <div className="space-y-8 md:space-y-12 ">
              {/* Mapa */}
                {/* Borda animada principal */}

                {/* Efeito shimmer */}
               
                
                {/* Card principal */}
                <div className="bg-gradient-to-br from-[#e2ba4b] to-[#d4a93a]  shadow-2xl border border-[#d4a93a] overflow-hidden card-hover-effect">
                <div className="relative p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center animate-float">
                    Localização no Mapa
                  </h3>
                  <GoogleMapComponent cityConfig={cityConfig} />
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="mt-4 btn-black bg-black text-white btn-hover-scale py-3 px-6 text-lg font-semibold animate-pulse-golden rounded-none"
                    >
                      FALE CONOSCO 
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-12 md:py-16 lg:py-24 contact-bg paper-money-effect relative overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16 scroll-reveal">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 inline-block relative">
                Fale diretamente com um de{" "}
                <span className="gradient-text">nossos Advogados</span>
                <span
                  className="block absolute left-0 -bottom-1 w-full h-1 bg-white"
                  style={{ transform: 'translateY(100%)' }}
                  aria-hidden="true"
                ></span>
              </h2>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto px-4">
                Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Formulário */}
               <div className="rounded-2xl shadow-2xl overflow-hidden card-hover-effect scroll-reveal-right golden-particles">
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Fale diretamente com um de <span className="gradient-text">nossos Advogados</span></h3>
                    <p className="text-base md:text-lg text-white">
                      Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades.
                    </p>
                  </div>
                  <form className="space-y-4 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                      <div>
                        <Input placeholder="Nome Completo" className="border-gray-300 bg-white h-12 text-black placeholder-black" />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="E-mail"
                          className="border-gray-300 bg-white h-12 text-black placeholder-black"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input placeholder="Telefone" className="border-gray-300 bg-white h-12 text-black placeholder-black" />
                      </div>
                      <div>
                        <Input
                          placeholder="Área de Interesse"
                          className="border-gray-300 bg-white h-12 text-black placeholder-black"
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Mensagem"
                        className="border-gray-300 bg-white min-h-[120px] text-black placeholder-black resize-none"
                      />
                    </div>
                    <Button className="w-full btn-golden btn-hover-scale text-black py-3 text-lg font-semibold h-12 shadow-lg animate-pulse-golden">
                      SOLICITAR UM ESPECIALISTA 
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação Section */}
        <section id="areas-atuacao" className="py-12 md:py-16 lg:py-24 text-white relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/fundo/01.webp')",
            }}
          ></div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-12 md:mb-16 scroll-reveal ${isLoaded ? 'animate-fadeInUp' : ''}`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 inline-block relative">
                <span className="gradient-text">Áreas de</span> ATUAÇÃO
                <span
                  className="block absolute left-0 -bottom-1 w-full h-1 bg-white"
                  style={{ transform: 'translateY(100%)' }}
                  aria-hidden="true"
                ></span>
              </h2>
              <p className="text-lg md:text-xl text-white max-w-4xl mx-auto px-4 mb-4">
                Atendimento nas Diversas Áreas do Direito
              </p>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-4">
                Nossa equipe capacitada e multidisciplinar está sempre preparada para atender às necessidades de nossos clientes com total eficiência.
              </p>
            </div>

            <div className={`mb-12 ${
              cityConfig.practiceAreas.length <= 2 
                ? 'flex justify-center gap-6 md:gap-8 max-w-4xl mx-auto' 
                : cityConfig.practiceAreas.length === 5
                ? 'grid grid-cols-5 gap-4 max-w-6xl mx-auto'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
            }`}>
              {cityConfig.practiceAreas.map((area, index) => {
                // Mapear ícones baseado no nome
                const iconMap: { [key: string]: React.FC<SVGIconProps> } = {
                  'PrevidenciarioIcon': PrevidenciarioIcon,
                  'TrabalhistaIcon': TrabalhistaIcon,
                  'CivilIcon': CivilIcon,
                  'TributarioIcon': TributarioIcon,
                  'PublicoEstatutarioIcon': PublicoEstatutarioIcon
                };
                const IconComponent = iconMap[area.icon] || PrevidenciarioIcon;
                return (
                  <div key={index} className={`relative group cursor-pointer scroll-reveal-left ${isLoaded ? `animate-scaleIn delay-${(index + 1) * 100}` : ''} ${
                    cityConfig.practiceAreas.length <= 2 ? 'flex-1 min-w-[300px] max-w-[400px]' : ''
                  }`}>
                    <div className={`bg-gradient-to-b from-black to-[#4B4B4B] text-center transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden ${
                      cityConfig.practiceAreas.length === 5 
                        ? 'p-4 md:p-5 min-h-[220px]' 
                        : cityConfig.practiceAreas.length <= 2
                        ? 'p-8 md:p-10 min-h-[320px]'
                        : 'p-6 md:p-8 min-h-[280px]'
                    }`}>
                      {/* Efeito de expansão dourada de dentro para fora */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e2ba4b] via-[#f4d366] to-[#e2ba4b] scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"></div>
                      
                      {/* Conteúdo do card */}
                      <div className="flex flex-col items-center relative z-10 group">
                        <div className={`bg-transparent rounded-2xl border-2 border-white flex items-center justify-center transition-all duration-500 group-hover:border-black ${
                          cityConfig.practiceAreas.length === 5 
                            ? 'w-12 h-12 md:w-14 md:h-14 mb-4' 
                            : cityConfig.practiceAreas.length <= 2
                            ? 'w-20 h-20 md:w-24 md:h-24 mb-8'
                            : 'w-16 h-16 md:w-20 md:h-20 mb-6'
                        }`}>
                          <IconComponent 
                            className={`icon-outline transition-all duration-500 fill-white group-hover:fill-black ${
                              cityConfig.practiceAreas.length === 5 
                                ? 'h-6 w-6 md:h-7 md:w-7' 
                                : cityConfig.practiceAreas.length <= 2
                                ? 'h-10 w-10 md:h-12 md:w-12'
                                : 'h-8 w-8 md:h-10 md:w-10'
                            }`}
                          />
                        </div>
                        <h3 className={`font-bold text-white group-hover:text-black transition-colors duration-500 ${
                          cityConfig.practiceAreas.length === 5 
                            ? 'text-sm md:text-base' 
                            : cityConfig.practiceAreas.length <= 2
                            ? 'text-xl md:text-2xl'
                            : 'text-lg md:text-xl'
                        }`}>
                          {area.title}<br />{area.subtitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => scrollToSection("contato")}
                className="bg-gray-900/40 backdrop-blur-sm border-none btn-hover-scale hover:bg-[#e2ba4b] hover:text-black text-white py-4 px-8 text-lg font-semibold inline-flex items-center space-x-2 rounded-none transition-colors duration-300"
              >
                <span>+</span> SAIBA MAIS
              </Button>
            </div>
          </div>
        </section>

        {/* Informações Section */}
        <section id="informacoes" className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 scroll-reveal">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 inline-block relative">
                Informações de <span className="gradient-text">Contato</span>
                <span
                  className="block absolute left-0 -bottom-1 w-full h-1 bg-black"
                  style={{ transform: 'translateY(100%)' }}
                  aria-hidden="true"
                ></span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Todas as informações para entrar em contato conosco.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="bg-[#e2ba4b]  shadow-2xl overflow-hidden border border-[#e2ba4b] card-hover-effect scroll-reveal-left golden-particles">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6 animate-float">
                    Informações de Contato
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 mb-4">
                          <p className="font-semibold text-black text-base">Telefone SAC</p>
                          <p className="text-gray-600 text-base break-all">{cityConfig.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">E-mail Oficial</p>
                          <p className="text-gray-600 text-base break-all">{cityConfig.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">Localização</p>
                          <p className="text-gray-600 text-base">{cityConfig.address.city} - {cityConfig.address.state}</p>
                          <p className="text-sm text-gray-500 break-words">
                            {cityConfig.address.street}, {cityConfig.address.neighborhood} - {cityConfig.address.city}, {cityConfig.address.state}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">Horário de Atendimento</p>
                          <p className="text-gray-600 text-base">{cityConfig.workingHours}</p>
                          {cityConfig.workingHoursBreak && (
                            <p className="text-sm text-gray-500">{cityConfig.workingHoursBreak}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image 
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                width={200} 
                height={100} 
                className="h-16 w-auto" 
                loading="lazy" 
                quality={85} 
              />
            </div>

            {/* SAC e Redes Sociais */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <div className="text-white text-lg font-bold mb-2 hover:text-[#e2ba4b] transition-colors duration-300 cursor-pointer animate-bounce-gentle">
                  SAC geral
                </div>
                <div className="flex items-center justify-center space-x-2 group px-4 py-2 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-white group-hover:text-[#e2ba4b] transition-colors duration-300 animate-bounce-gentle" />
                  <a 
                    href={`tel:${cityConfig.phone.replace(/\D/g, '')}`}
                    className="text-white hover:text-[#e2ba4b] transition-colors duration-300 text-lg font-bold animate-bounce-gentle"
                  >
                    {cityConfig.phone}
                  </a>
                </div>
              </div>
              
              {/* Redes Sociais */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-gray-600 rounded-lg hover:border-[#e2ba4b] hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Menu Navegação - 2 linhas */}
            <div className="hidden lg:flex flex-col items-center space-y-3">
              {/* Primeira linha - 3 itens */}
              <div className="flex items-center space-x-3 text-sm">
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-[#e2ba4b] hover:text-white transition-all duration-300 font-medium"
                >
                  Localização
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium"
                >
                  Entre em Contato
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => scrollToSection("areas-atuacao")}
                  className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium"
                >
                  Áreas de Atuação
                </button>
              </div>
              {/* Segunda linha - 3 itens */}
              <div className="flex items-center space-x-3 text-sm">
                <button
                  onClick={() => scrollToSection("informacoes")}
                  className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium"
                >
                  Informações
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => handleMenuClick({ href: "https://abraoesilvaadvogados.com.br/equipe-2/", type: "external" })}
                  className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium"
                >
                  Equipe
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => handleMenuClick({ href: "https://abraoesilvaadvogados.com.br/duvidas/", type: "external" })}
                  className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium"
                >
                  Dúvidas
                </button>
              </div>
            </div>

            {/* Botão Encontre um Escritório */}
            <div className="flex items-center">
              <a
                href="https://abraoesilvaadvogados.com.br/contato/#nossas-unidades"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#e2ba4b] text-black px-6 py-4 text-base font-medium shadow-lg hover:bg-[#d4a942] transition-colors duration-200"
                style={{
                  borderTopLeftRadius: '2rem',
                  borderTopRightRadius: '0rem',
                  borderBottomRightRadius: '1.5rem',
                  borderBottomLeftRadius: '0rem',
                  minWidth: 240,
                  minHeight: 100,
                }}
              >
                <svg aria-hidden="true" className="flex-shrink-0" width={28} height={28} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"></path>
                </svg>
                <span className="text-base text-black leading-snug font-medium">
                  Encontre um escritório<br />mais próximo!
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 px-4 py-3">
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-black text-xs lg:text-sm">
                Copyright © {new Date().getFullYear()} ABRAO E SILVA | ADVOGADOS ASSOCIADOS. Todos os Direitos reservados.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col items-end space-y-1">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg btn-hover-scale animate-bounce-gentle hover:shadow-2xl">
            <MessageCircle className="h-5 w-5 animate-float" />
            <span className="text-sm font-medium">Como posso te ajudar?</span>
          </button>
        </div>
      </div>

      {/* Cookie Popup Otimizado */}
      <InlineCookiePopup 
        showCookiePopup={showCookiePopup}
        handleAcceptCookies={handleAcceptCookies}
        handleRejectCookies={handleRejectCookies}
      />
    </div>
  )
}