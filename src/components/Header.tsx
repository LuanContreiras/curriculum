import { useState, useEffect } from 'react'

type profileResponse = {
  name: string
  bio: string
  avatar_url: string
}

type user = {
  name: string
  bio: string
  avatar_url: string
}

export function Header() {
  const [user, setUser] = useState<user>({} as user)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/LuanContreiras'
      )
      const data = (await response.json()) as profileResponse

      setUser({
        name: data.name,
        bio: data.bio,
        avatar_url: data.avatar_url
      })
    }
    fetchData()
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-purple-500 to-purple-400  text-white rounded-br-3xl py-12 px-4 drop-shadow-3xl sm:flex sm:flex-row sm:justify-between sm:px-10 sm:items-center lg:py-4">
      <div className="flex items-center gap-5">
        <img
          src={user.avatar_url}
          alt="Foto de perfil"
          className="hidden lg:inline rounded-full h-[120px] border-4 border-white "
        />
        <div>
          <h1 className="uppercase text-2xl font-bold">{user.name}</h1>
          <h4 className="opacity-90">{user.bio}</h4>
        </div>
      </div>

      <div className="flex gap-1 mt-2 text-sm">
        <span className="opacity-90">luan.contreiras@hotmail.com</span>
        <span>|</span>
        <span className="opacity-90">(71) 99250-5190</span>
      </div>
    </div>
  )
}
