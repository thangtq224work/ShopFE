import { QUANTITY_SIZE } from "@/const/validate";
const homeApp = {
    en: {
        lang: "English",
        search: "Search product",
        noData: "No data avaiable",
        outOfStock: "This product is out of stock",
        auth:{
            usernameInvalid:"Username or password invalid",
            login:"Login",
            username:"Username",
            password:"Password",
            validate:{
                usernameNotNull: "Username must not be null",
                passwordNotNull: "Password must not be null",
            }
        },
        cartPage:{
            cart:"Cart",
            orderAction:{
                orderSuccess:"Ordered successfully",
                orderFaild:"Ordered failded , please checking again",
            },
            cartField:{
                image:"Image",
                figure:"Figure",
                price:"Price",
                quantity:"Quantity",
                totalPrice:"Total",
                action:"Action",
            },
            cartProduct: (quantity) =>{
                return `You have ${quantity} ${quantity > 1 ? 'products' : 'product'} in your cart`
            },
            cartInfor:"Cart information",
            totalWeight:"Total weight ( esstimate )",
            totalQuantity:"Total quantity",
            totalPrice:"Total price",
            discount:"Discount",
            shippingFee:"Transport fee",
            price:"Price",
            userInfor:{
                name:"Full name",
                email:"Email",
                phone:"Phone",
                address:"Address",
                province:"Province",
                district:"District",
                ward:"Ward",
                description:"Description",
                shippingMethod:"Shipping method"
            },
            userValidate:{
                name:"Full name must be between 5 and 50 characters",
                email:"Email invalid",
                phone:"Phone invalid",
                address:"Address must be between 5 and 50 characters",
                province:"Please select your province",
                ward:"Please select your ward",
                district:"Please select your district",
                description:"Description must less than 500 characters",
            },
            btn:{
                perchar:"Order",
                back:"Back",
                confirm:"Confirm"
            }
        },
        quantityValidate:{
            quantityNotNull:"Quantity of product must not be null",
            quantitySize:`Quantity of product must greater than 0 or less than ${QUANTITY_SIZE}`,
        },
        filter: {
            category: "Category",
            type: "Type",
            material: "Material"
        },
        filterDes: "Filter",
        allProduct: "All product",
        sort: "Sort",
        sortBy: [
            {
                name: "Price : increase",
                sort: "priceSell",
                direction: "asc"
            },

            {
                name: "Price : decrease",
                sort: "priceSell",
                direction: "desc"
            },

            {
                name: "Name : A-Z",
                sort: "priceSell",
                direction: "asc"
            },

            {
                name: "Name : Z-A",
                sort: "name",
                direction: "desc"
            },

            {
                name: "Latest ",
                sort: "createAt",
                direction: "asc"
            },

            {
                name: "Oldest ",
                sort: "createAt",
                direction: "desc"
            },
        ],
        addToCart: {
            path: "add-to-cart",
            name: "Add to cart"
        },
        detail: "Detail",
        cartAlert:{
            addToCartSuccess: "Add to cart successfully",
            addToCartFaild: "The quantity of product is fully . please check again",
            
        },
        detailDialog: {
            dimension: "Dimension",
            weight: "Weight",
            description: "Description"
        }
    },
    vi: {
        lang: "Tiếng việt",
        search: "Tìm kiếm sản phẩm",
        noData: "Không có dữ liệu",
        outOfStock: "Sản phẩm tạm thời hết hàng",
        auth:{
            usernameInvalid:"Tài khoản hoặc mật khẩu không chính xác",
            login:"Đăng nhập",
            username:"Tên đăng nhập",
            password:"Mật khẩu",
            validate:{
                usernameNotNull: "Vui lòng nhập tên đăng nhập",
                passwordNotNull: "Vui lòng nhập mật khẩu",
            }
        },
        
        cartPage:{
            cart:"Giỏ hàng",
            orderAction:{
                orderSuccess:"Đặt hàng thành công",
                orderFaild:"Đặt hàng thất bại, vui lòng kiểm tra lại",
            },
            cartField:{
                image:"Hình ảnh",
                figure:"Mô hình",
                price:"Giá",
                quantity:"Số lượng",
                totalPrice:"Tổng tiền",
                action:"Hành động",
            },
            cartProduct: (quantity) =>{
                return `Bạn đang có ${quantity} trong giỏ hàng`
            },
            cartInfor:"Thông tin giỏ hàng",
            totalWeight:"Khối lượng ( ước tính )",
            totalQuantity:"Tổng sản phẩm",
            totalPrice:"Tổng đơn hàng",
            discount:"Giảm giá",
            shippingFee:"Phí vận chuyển",
            price:"Giá",
            userInfor:{
                name:"Họ tên",
                email:"Email",
                phone:"Số điện thoại",
                address:"Địa chỉ",
                province:"Tỉnh thành",
                district:"Quận / Huyện",
                ward:"Xã / Phường",
                description:"Mô tả",
                shippingMethod:"Phương thức vận chuyển"
            },
            
            userValidate:{
                name:"Họ tên từ 5 - 50 kí tự",
                email:"Email không hợp lệ",
                phone:"Số điện thoại không hợp lệ",
                address:"Địa chỉ từ 5 - 50 kí tự",
                province:"Vui lòng chọn tỉnh thành",
                ward:"Vui lòng chọn xã phường",
                district:"Vui lòng chọn quận / huyện",
                description:"Mô tả phải nhỏ hơn 500 kí tự",
            },
            btn:{
                perchar:"Đặt hàng",
                back:"Quay lại",
                confirm:"Xác nhận"
            }
        },
        quantityValidate:{
            quantityNotNull:"Số lượng không được bỏ trống",
            quantitySize:`Số lượng phải lớn hơn 0 hoặc nhỏ hơn ${QUANTITY_SIZE}`,
        },
        filter: {
            category: "Danh mục",
            type: "Loại",
            material: "Chất liệu"
        },
        filterDes: "Bộ lọc",
        allProduct: "Tất cả sản phẩm",
        sort: "Sắp xếp",
        sortBy: [
            {
                name: "Giá : tăng dần",
                sort: "priceSell",
                direction: "asc"
            },

            {
                name: "Giá : giảm dần",
                sort: "priceSell",
                direction: "desc"
            },

            {
                name: "Tên : A-Z",
                sort: "priceSell",
                direction: "asc"
            },

            {
                name: "Tên : Z-A",
                sort: "name",
                direction: "desc"
            },

            {
                name: "Mới nhất ",
                sort: "createAt",
                direction: "asc"
            },

            {
                name: "Cũ nhất ",
                sort: "createAt",
                direction: "desc"
            },
        ],
        addToCart: {
            path: "them-vao-gio-hang",
            name: "Thêm vào giỏ hàng"
        },
        cartAlert:{
            addToCartSuccess: "Thêm vào giỏ hàng thành công",
            addToCartFaild: "Số lượng của sản phẩm đã đầy . Vui lòng kiểm tra giỏ hàng",
            
        },
        detail: "Chi tiết",
        detailDialog: {
            dimension: "Kích thước",
            weight: "Cân nặng",
            description: "Mô tả"
        }

    },
}
export default homeApp;