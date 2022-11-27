import Swal from 'sweetalert2';

export default function alertTermAndConditions() {
  Swal.fire({
    title: 'เงื่อนไขและข้อตกลง',
    html:
      '<b>โปรดอ่านและทำความเข้าใจข้อความต่อไปนี้ เมื่อท่านยอมรับและสมัครเป็นสมาชิกแล้ว เราจะถือว่าท่านเข้าใจและยินยอมปฏิบัติตามเงื่อนไขและข้อตกลงนี้ทุกประการ</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder: 'I agree with the terms and conditions',
    confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
  });
}
