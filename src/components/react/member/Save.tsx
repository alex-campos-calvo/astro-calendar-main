import { Toaster, toast } from 'sonner'
import 'sonner/dist/styles.css'

export default function Save() {
  const saveMember = async () => {
    const obj = {
      id: (document.getElementById('id') as HTMLInputElement)?.value,
      name: (document.getElementById('name') as HTMLInputElement)?.value,
      email: (document.getElementById('email') as HTMLInputElement)?.value,
      description: (document.getElementById('description') as HTMLInputElement)?.value,
      is_admin: (document.getElementById('is_admin') as HTMLInputElement)?.checked,
      is_active: (document.getElementById('is_active') as HTMLInputElement)?.checked
    }

    return await fetch('/members/api/upsert-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  return (
    <div className="flex justify-end">
      <button
        className="place-self-end rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
        onClick={() => {
          toast.promise(saveMember, {
            loading: 'Guardando...',
            success: (response) => {
              if (response.status === 202) {
                response.text().then((text) => {
                  window.location.href = '/members/' + text + '?edit=true'
                })
              }
              return 'Guardado correctamente!'
            },
            error: 'Error guardando usuario!'
          })
        }}
      >
        Guardar
      </button>
      <Toaster position="bottom-right" />
    </div>
  )
}
