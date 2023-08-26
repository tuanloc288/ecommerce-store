import getBillboard from "@/actions/getBillboard"
import getProducts from "@/actions/getProducts"
import Billboard from "../components/Billboard"
import Container from "../components/ui/Container"
import ProductsList from "../components/ProductsList"

const HomePage = async () => {
  const billboard = await getBillboard("0c2cd1ee-ffe5-48dd-baee-bbc03a1ff761")
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList items={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  )
}

export default HomePage