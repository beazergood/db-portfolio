import Typewriter from 'typewriter-effect'
export const Typewriter2000 = () => {
  return (
    <Typewriter
      options={{
        strings: getGreeting(),
        autoStart: true,
        cursor: '<span class="text-3xl">|</span>',
        cursorClassName: 'text-4xl',
        loop: true,
      }}
    />
  )
}
function getGreeting() {
  return [
    // '<span class="text-3xl">Oi</span>',
    '<span class="text-3xl">Hello!</span>',
    // '<span class="text-3xl">Worrrrrd</span>',
    '<span class="text-3xl">G\'day!</span>',
    '<span class="text-3xl">Hi!</span>',
    '<span class="text-3xl">Bonjour!</span>',
    // '<span class="text-3xl">Wagwan</span>',
    // '<span class="text-3xl">Jambo!</span>',
    '<span class="text-3xl">Ello ello...</span>',
  ]
}
