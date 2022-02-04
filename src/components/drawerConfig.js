import { Icon } from '@iconify/react';


const drawerConfig = [
    {
      title: 'Home',
      path: '/newHomePage',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: 'Dashboard',
      path: '/Dashboard',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
    },
    {
      title: 'Interaction Pair Tool',
      path: '/getInteractionPair',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
    },
    {
      title: 'All Interactions Tool',
      path: '/getDrugInteraction',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>   
    },
    {
      title: 'All Substances',
      path: '/AllDrugTerms',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    },
    {
      title: 'All Substance Classes',
      path: '/AllDrugClasses',
      icon: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M33.53 21.58l-4.94-2.83v-5.66a1 1 0 0 0-.51-.87L22.64 9.1a1 1 0 0 0-1 0l-5.44 3.12a1 1 0 0 0-.51.87v5.66l-4.94 2.83a1 1 0 0 0-.5.87v6.24a1 1 0 0 0 .5.86l5.45 3.12a1 1 0 0 0 1 0l4.95-2.83l4.95 2.83a1 1 0 0 0 .5.14a1 1 0 0 0 .49-.14l5.45-3.12a1 1 0 0 0 .5-.86v-6.24a1 1 0 0 0-.51-.87zM22.14 11.12l4.45 2.55V19l-4.46 2.56l-4.44-2.6v-5.29zm-5.45 19.53l-4.44-2.54V23l4.68-2.68l4.4 2.57V28zM32 28.11l-4.44 2.54L22.93 28v-5.07l4.46-2.57L32 23z" class="clr-i-outline clr-i-outline-path-1" fill="currentColor"/><path d="M7 27.43a1 1 0 0 1-1-1V19.9a1 1 0 0 1 .5-.9l4.95-2.83v-5.63a1 1 0 0 1 .5-.87l5.21-3a1 1 0 0 1 1.37.37a1 1 0 0 1-.38 1.37l-4.7 2.68v5.66a1 1 0 0 1-.51.87L8 20.48v5.95a1 1 0 0 1-1 1z" class="clr-i-outline clr-i-outline-path-2" fill="currentColor"/><path d="M3 25.05a1 1 0 0 1-1-1v-6.52a1 1 0 0 1 .5-.86l5-2.84V8.17a1 1 0 0 1 .5-.86l5.25-3a1 1 0 0 1 1 1.74l-4.8 2.7v5.66a1 1 0 0 1-.51.87L4 18.11v5.94a1 1 0 0 1-1 1z" class="clr-i-outline clr-i-outline-path-3" fill="currentColor"/></svg>


    },
    {
      title: 'Rxcui ID Finder Tool',
      path: '/getRxcuiId',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
    },
    {
      title: 'Molecule View Tool',
      path: '/drug3dtest',
      icon: <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    {
      title: 'Drug Price Finder Tool',
      path: '/',
      icon: <svg width="30px" height="30px" aria-hidden="true" role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2c.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8c-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119c0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3c-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7c4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124c-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5c-33.8-12.2-49.5-31.9-49.5-57.3c0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2c47.3 14.4 63.2 34.4 63.2 65.1c0 39.1-29.4 62.6-72 66.4z" fill="currentColor"/>
      </svg>
    },
  ];

  export default drawerConfig;