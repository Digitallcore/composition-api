export function useFormatDate(){
    const formatDate = (strDate) => {
        return new Date(strDate).toLocaleDateString('ru-ru', {year:"numeric", month:"long", day:"numeric"})
      }
      return {formatDate}
}