import { Toaster, toast } from 'sonner'
import 'sonner/dist/styles.css'

export default function Delete() {
  const deleteMember = async () => {
    const obj = {
      id: (document.getElementById('id') as HTMLInputElement)?.value
    }

    return await fetch('/members/api/delete-user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  return (
    <div className="flex justify-end">
      <button
        className="place-self-start rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={() => {
          toast.promise(deleteMember, {
            loading: 'Borrando...',
            success: () => {
              window.location.href = '/members/users'
              return 'Borrado correctamente!'
            },
            error: 'Error borrando usuario!'
          })
        }}
      >
        Eliminar
      </button>
      <Toaster position="bottom-right" />
    </div>
  )
}
