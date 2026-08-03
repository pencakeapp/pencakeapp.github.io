import GoogleAnalytics from "@/components/GoogleAnalytics";
import FaqDeepLinks from "@/components/faq/FaqDeepLinks";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned Korean FAQ — FaqEn's layout with the legacy Korean copy
// verbatim (content/ko/faq.json). Sections and questions keep their
// legacy Notion block ids so existing #deep-links continue to work.

function Note({ children }) {
  return (
    <div className="pc-faq-note">
      <span className="pc-faq-note-emoji" aria-hidden="true">
        ⚠️
      </span>
      <p>{children}</p>
    </div>
  );
}

const EMAIL_LINE = (
  <p>
    ✉️ <a href="mailto:pencake.app@gmail.com">pencake.app@gmail.com</a>
  </p>
);

const SECTIONS = [
  {
    id: "b0a62f4e28be4a3b9ce569f2e3b92c4e",
    numeral: "I",
    title: "일반",
    items: [
      {
        id: "d1fa8dc1c7be467eb0bc77cd6ddf9b42",
        q: "작성한 글을 다른 사람이 볼 수도 있나요?",
        a: (
          <p>
            아닙니다. 볼 수 없습니다. PenCake는 작성된 글을 서버에 업로드하지
            않고 사용자의 기기에만 저장합니다. 따라서 남에게 보여주고 싶지
            않은 내용도 안심하고 작성할 수 있습니다. 이것은 PenCake의 가장 큰
            특징 중의 하나입니다. 동기화 기능을 이용하더라도 사용자 본인
            계정의 Google Drive 또는 iCloud에만 파일을 저장하기 때문에 다른
            사람이 볼 수 없습니다.
          </p>
        ),
      },
      {
        id: "379e39c04b7c46909af48e9e093ca4de",
        q: "여러 기기에서 동일한 계정으로 앱을 사용하고 싶습니다.",
        a: (
          <p>
            앱에서 제공하는 동기화 기능을 이용하면 여러 기기를 동일한 클라우드
            계정으로 연동하여 사용할 수 있습니다. 현재 지원하는 클라우드
            저장소로는 Google Drive와 iCloud가 있습니다. Google Drive를
            이용하면 안드로이드 기기와 애플 기기간에도 연동이 가능합니다.
          </p>
        ),
      },
      {
        id: "e233062c0c154495a7b9c9a5b187e311",
        q: "폰을 바꾸거나 앱을 지우면 작성한 글이 모두 사라지나요?",
        a: (
          <>
            <p>
              네, 동기화를 하지 않고 폰을 바꾸거나 앱을 지우면 작성한 글이
              모두 사라집니다. 작성된 글은 서버에 업로드되지 않고 기기에만
              저장되기 때문입니다. 그러므로 동기화 기능을 이용하는 것을 강력히
              추천드립니다.
            </p>
            <p>
              동기화를 하면 작성된 글이 Google Drive와 같은 클라우드 저장소에
              백업됩니다. 따라서 폰을 바꾸거나 앱을 재설치하더라도 동일한
              클라우드 계정으로 다시 동기화하면 작성한 글을 모두 복구할 수
              있습니다.
            </p>
            <Note>
              무료 버전의 경우, 수동 동기화만 가능하므로 틈틈이{" "}
              <code>지금 동기화</code> 버튼을 눌러서 동기화를 해주세요.
            </Note>
          </>
        ),
      },
      {
        id: "c5e52a0e13a3424f9afc89c5bacf2448",
        q: "비밀번호를 잊어버렸어요.",
        a: (
          <>
            <p>안심하세요. 이메일로 연락주시면 도와드리겠습니다.</p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "de10b1e61e7e41e982a2b5dee717d069",
    numeral: "II",
    title: "사용 방법",
    items: [
      {
        id: "f0a0647e9bb645b2a2ba9c5b86be6b8b",
        q: "삭제한 글을 복원할 수 있나요?",
        a: (
          <p>
            삭제한 글은 휴지통에 임시 보관되며, 30일 이내에 복원이 가능합니다.
            30일이 지나면 영구적으로 삭제됩니다. 휴지통을 확인하시려면,{" "}
            <code>메인 메뉴</code> 버튼을 길게 눌러서 <code>이야기 목록</code>{" "}
            화면을 연 다음, 이 화면의 우측 상단에 있는 <code>메뉴</code>{" "}
            버튼을 누르세요.
          </p>
        ),
      },
      {
        id: "67176cc5955e4bc59e6928a936475fee",
        q: "휴지통을 찾을 수 없어요.",
        a: (
          <p>
            <code>메인 메뉴</code> 버튼을 길게 누르면 <code>이야기 목록</code>{" "}
            화면이 나타납니다. 여기서 우측 상단의 <code>메뉴</code> 버튼을
            누르면 휴지통을 찾으실 수 있습니다. 삭제된 글은 30일간 휴지통에
            임시 보관됩니다.
          </p>
        ),
      },
      {
        id: "9e43b5e8ae304bf399234a6e0c4516b8",
        q: "글을 잘못 수정해서 이전 버전으로 되돌리고 싶습니다. 가능할까요?",
        a: (
          <p>
            네, 가능합니다. <code>글 화면</code>에서 우측 하단의{" "}
            <code>메뉴</code> 버튼을 누르면 <code>변경 기록</code>이 있습니다.
            이 곳에서 해당 글에 대한 변경 이력을 확인할 수 있습니다. 필요할
            경우 이전 버전으로 되돌릴 수도 있습니다. 변경 이력은 무료 버전에서
            3일간, 프리미엄 버전에서 90일간 보관됩니다.
          </p>
        ),
      },
      {
        id: "31e478d527a34254b99ab45e4fc0fea5",
        q: "글 정렬 방식을 변경하고 싶어요.",
        a: (
          <p>
            이야기 제목을 길게 누르면 정렬 방식을 변경할 수 있습니다. 지금은
            가나다 순, 가나다 역순, 최신순, 오래된 순, 이렇게 네 가지 정렬
            방식을 제공하고 있습니다. 수정순과 숫자순 정렬방식도 추가될 수
            있도록 노력하겠습니다. 글 순서를 자유롭게 변경하는 기능은 현재
            없지만, 추후 반드시 추가할 계획입니다.
          </p>
        ),
      },
      {
        id: "2a9b473d4ec44c35bb4378dfc998511a",
        q: "이야기 순서를 바꾸고 싶어요.",
        a: (
          <p>
            <code>메인 메뉴</code> 버튼을 길게 누르면 <code>이야기 목록</code>이
            나타납니다. 여기서 이야기 제목을 길게 누른 상태에서 원하는 곳으로
            끌어다가 놓으면 이야기 순서를 변경할 수 있습니다.
          </p>
        ),
      },
      {
        id: "9e91ff16db4e453189d457144b155eb7",
        q: "원하는 이야기로 바로 이동하고 싶어요.",
        a: (
          <p>
            <code>메인 메뉴</code> 버튼을 길게 누르면 <code>이야기 목록</code>이
            나타납니다. 여기서 이야기 제목을 누르면 그 이야기로 바로 갈 수
            있습니다. 이야기 제목을 길게 누르면 이야기 순서를 변경할 수 있다는
            점도 참고 부탁드려요.
          </p>
        ),
      },
      {
        id: "fa46e532c4a0427ea408579fae3deab1",
        q: "이야기끼리 분류를 하고 싶어요. 폴더 같은 것이 있나요?",
        a: (
          <p>
            네, 폴더 기능을 제공하고 있습니다. <code>메인 메뉴</code> 버튼을
            길게 누르면 <code>이야기 목록</code>이 나타납니다. 여기서 좌측
            상단의 <code>+</code> 버튼을 누르면 폴더를 추가할 수 있습니다.
            폴더를 만든 후에, 해당 폴더 아래로 이야기를 이동시키면 이 이야기는
            해당 폴더에 속하게 됩니다. 폴더를 누르면 폴더를 접거나 펼 수
            있습니다. 이야기를 이동하려면 이야기 제목을 길게 누른 후 원하는
            곳으로 끌어다가 놓으세요.
          </p>
        ),
      },
      {
        id: "bf2e200cdc9e4b7598e338149ec50fcd",
        q: "폴더 수정과 삭제는 어떻게 하나요?",
        a: <p>폴더를 좌우로 밀면 수정과 삭제를 할 수 있습니다.</p>,
      },
      {
        id: "4b72845356c14ec3af0b3c68c29324d9",
        q: "이야기 삭제는 어떻게 하나요?",
        a: (
          <p>
            <code>메인 메뉴</code> &gt; <code>이야기 설정</code> &gt;{" "}
            <code>이야기 제거</code> 에서 삭제할 수 있습니다. 이야기에 있던
            모든 글은 휴지통에 임시 보관됩니다. 30일이 지나면 완전히
            삭제됩니다.
          </p>
        ),
      },
    ],
  },
  {
    id: "f4eba64d4e7c43ff9f1d1074f7100362",
    numeral: "III",
    title: "프리미엄 구입",
    items: [
      {
        id: "c9d483bb406f4e6ba7953baa23948086",
        q: "구매복원을 누르면 구매이력이 없다고 표시됩니다.",
        a: (
          <>
            <p>
              안드로이드에서 기기의 계정 설정에 여러 계정이 등록되어 있는
              경우, 구매 이력을 잘 가져오지 못하는 현상이 발생하곤 합니다.
              이러한 경우에는, 구매에 사용한 계정만 남겨두고 나머지 계정은
              모두 잠시 삭제한 후, 다시 구매복원을 해보시기 바랍니다. 불편을
              드려 죄송합니다. 😭
            </p>
            <p>
              안드로이드에서 아이폰으로 또는 아이폰에서 안드로이드로 변경한
              경우에는, 앱 마켓이 다르므로 원칙상으로는 구매복원이
              불가능합니다. 하지만 앱에서 제공하는 동기화 기능을 이용하면
              기기를 변경하더라도 추가 구입 없이 프리미엄을 이용할 수
              있습니다.
            </p>
          </>
        ),
      },
      {
        id: "527f23773fd642ce83e648640eb89630",
        q: "프리미엄을 구입했는데 기기마다 추가로 구입해야 하나요?",
        a: (
          <>
            <p>
              아닙니다. 앱에서 제공하는 동기화 기능을 이용하면, 작성한 글뿐만
              아니라 프리미엄 상태도 함께 동기화됩니다. 때문에 기존 기기와
              추가 기기를 동기화 기능으로 연동하면, 추가로 프리미엄을 구입하지
              않아도 모든 기기에서 프리미엄을 이용할 수 있습니다.
            </p>
            <p>
              동기화 기능을 이용하지 않더라도, 안드로이드 기기끼리, 또는 애플
              기기끼리는 구매복원 기능을 이용하여 추가 구입 없이 프리미엄을
              이용할 수 있습니다. <code>메뉴</code> &gt; <code>앱 설정</code>{" "}
              &gt; <code>프리미엄</code> 페이지로 가서 우측 상단의{" "}
              <code>구매복원</code> 버튼을 누르면 구매복원을 할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        id: "e95d22d27b644618b8b6e4e3bf5f27a3",
        q: "안드로이드에서 프리미엄을 구입했는데 아이폰에서 추가로 구입해야 하나요?",
        a: (
          <>
            <p>
              아닙니다. 앱에서 제공하는 동기화 기능을 이용하면, 작성한 글뿐만
              아니라 프리미엄 상태도 함께 동기화됩니다. 때문에 기존 기기와
              추가 기기를 동기화 기능으로 연동하면, 추가로 프리미엄을 구입하지
              않아도 모든 기기에서 프리미엄을 이용할 수 있습니다. 단, 동기화를
              하지 않은 상태로 기존 기기를 처분한 경우에는 앱 마켓이 다르므로
              원칙상으로는 구매복원이 불가능합니다. 이러한 경우에는 저희에게
              이메일로 연락주시기 바랍니다.
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
      {
        id: "1242b1dc16954291a1211692754fe4e8",
        q: "아이폰에서 프리미엄을 구입했는데 안드로이드 폰에서 추가로 구입해야 하나요?",
        a: (
          <>
            <p>
              아닙니다. 앱에서 제공하는 동기화 기능을 이용하면, 작성한 글뿐만
              아니라 프리미엄 상태도 함께 동기화됩니다. 때문에 기존 기기와
              추가 기기를 동기화 기능으로 연동하면, 추가로 프리미엄을 구입하지
              않아도 모든 기기에서 프리미엄을 이용할 수 있습니다. 단, 동기화를
              하지 않은 상태로 기존 기기를 처분한 경우에는 앱 마켓이 다르므로
              원칙상으로는 구매복원이 불가능합니다. 이러한 경우에는 저희에게
              이메일로 연락주시기 바랍니다.
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "b92823c8e3f346ecb77ea136de2777f4",
    numeral: "IV",
    title: "동기화",
    items: [
      {
        id: "8f4784aaa72f4fd0ace4b80c37ec1f28",
        q: "iCloud 동기화가 안되는 것 같아요.",
        a: (
          <>
            <p>
              iCloud는 iOS에 전적으로 의존하여 파일 업로드와 다운로드를
              제어합니다. 문제는 가끔씩 iCloud의 파일 업로드 및 다운로드가
              iOS에 의해 후순위로 밀리거나 먹통이 되는 현상이 발생한다는
              것인데요, 앱 수준에서 이에 관여할 수 있는 방법이 없다보니
              동기화가 진행되지 않고 지연되는 현상이 발생합니다. 불편을 드려
              죄송합니다. 이러한 경우에는, 기기의 iCloud 설정에서 iCloud
              Drive를 비활성화했다가 몇 초 후 다시 활성화를 해주세요. 그런
              다음, 애플의 파일 앱을 열어서 iCloud Drive에 있는 일반 파일들이
              보이는지 확인해주세요. 이상이 없을 경우, 몇 분 후에 PenCake
              앱에서 동기화를 다시 시도해보시기 바랍니다.
            </p>
            <p>
              보다 안정적인 동기화를 선호하시는 경우에는, 구글 드라이브를
              사용하실 것을 추천드립니다. 구글 드라이브는 앱 수준에서 파일
              업로드/다운로드를 완전히 제어할 수 있기 때문에 이러한 현상이
              나타나지 않습니다. 구글 드라이브를 이용하면 iOS와 Android 간에
              또는 iOS와 Windows PC 간에도 동기화가 가능한 점을 참고
              바랍니다.
            </p>
          </>
        ),
      },
      {
        id: "c2eea6755dcb417fb00c8c25d363c47a",
        q: "구글 드라이브로 동기화가 되었다는데 구글 드라이브에 아무런 파일이 없어요.",
        a: (
          <>
            <p>
              구글 드라이브로 동기화된 데이터는 사용자 계정의 구글 드라이브
              내에서 <code>앱 데이터 폴더</code>에 저장됩니다. 앱 데이터
              폴더는 숨겨져 있기 때문에 사용자에게 보여지지 않고, 사용중인
              용량만 확인 가능합니다.
            </p>
            <p>
              <code>사용자 폴더</code>가 아닌 앱 데이터 폴더에 저장하는 이유는
              데이터를 최대한 안전하게 보관하기 위함입니다. 사용자 폴더에
              저장할 경우, 사용자가 실수로 파일을 삭제하거나 수정할 수 있기
              때문입니다.
            </p>
            <p>
              <a href="/ko/download/desktop/">PenCake 데스크톱 앱</a>을
              이용하면 컴퓨터에서 직접 글을 작성하고 수정할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        id: "db7161b5e7aa4e9eb88d3e97ed8848a5",
        q: "구글 드라이브로 동기화된 데이터의 용량을 확인하고 싶어요.",
        a: (
          <>
            <ol>
              <li>
                데스크탑 버전의 구글 드라이브 웹사이트에 들어가주세요.{" "}
                <a href="https://drive.google.com/">https://drive.google.com/</a>
              </li>
              <li>
                우측 상단에 있는 ⚙️ <code>설정 버튼</code>을 눌러주세요.
              </li>
              <li>
                <code>설정</code> &gt; <code>앱 관리</code>로 들어가주세요.
              </li>
              <li>앱 데이터 폴더를 사용중인 앱 목록이 나타납니다.</li>
              <li>
                PenCake 이름 바로 아래에, 동기화된 데이터의 용량이 표시됩니다.
              </li>
            </ol>
            <Note>
              <strong>주의:</strong> 여기서{" "}
              <code>숨겨진 앱 데이터 삭제</code>를 누르면 동기화된 데이터가
              완전히 삭제되므로 주의해주세요!
            </Note>
          </>
        ),
      },
      {
        id: "9542efc9794e4ef1b4daf4ba638342e2",
        q: "[403] storageQuotaExceeded 에러가 발생합니다.",
        a: (
          <p>
            이 에러는 사용자 본인 계정의 구글 드라이브 용량이 가득 찼기 때문에
            동기화가 불가능한 상태임을 의미합니다. 사용중인 용량은{" "}
            <a href="https://myaccount.google.com/">Google 계정 페이지</a>에서
            확인하실 수 있습니다. 사용중인 용량은, 계정별로 구글의 모든
            서비스가 통합되어 관리가 되는 점을 참고 바랍니다.
          </p>
        ),
      },
      {
        id: "6a4de008d03244c88c7d1aafd185672a",
        q: "아이폰과 안드로이드 간에도 동기화가 가능한가요?",
        a: (
          <p>
            네, 가능합니다. 구글 드라이브로 동기화를 하시면 기기 종류에
            관계없이 동기화가 가능합니다. iCloud는 애플 기기에서만 사용
            가능하기 때문에, 안드로이드와의 동기화는 불가능한 점을 이해
            부탁드립니다.
          </p>
        ),
      },
    ],
  },
  {
    id: "b776271706344975a86f3b86aeb850f5",
    numeral: "V",
    title: "개발 계획",
    items: [
      {
        id: "a645c72306e8404ab4aef59cca27eb27",
        q: "PC 또는 Mac 버전을 출시할 계획이 있나요?",
        a: (
          <>
            <p>
              네 — PenCake 데스크톱 버전이 이미 출시되었습니다!{" "}
              <a href="/ko/download/desktop/">여기</a>에서 다운로드하실 수
              있습니다.
            </p>
            <p>
              아직 프리뷰 버전이라 일부 기능은 완전히 구현되지 않았을 수 있는
              점 참고 부탁드립니다. 또한 데스크톱 앱은 프리미엄 사용자만
              이용할 수 있으며, 무료 사용자는 제한된 기능으로 체험하실 수
              있습니다.
            </p>
          </>
        ),
      },
      {
        id: "89e7fcc6ba3e458d8eded9bc187856cf",
        q: "검색 기능이 없어서 불편합니다.",
        a: (
          <p>
            노트 앱으로서 검색 기능이 아직 없는 점에 대해 매우 죄송스럽게
            생각하고 있습니다. 다음으로 추가할 주요 기능으로 검색 기능을
            강력히 고려하고 있습니다. 빠른 시일 내에 이용하실 수 있도록
            노력하겠습니다.
          </p>
        ),
      },
      {
        id: "ae79ed4e92db4eb79057a95d7a566cb4",
        q: "글씨 굵게, 기울이기, 크기, 색상, 하이라이트 등의 서식 기능이 있었으면 좋겠어요.",
        a: (
          <>
            <p>
              굵게, 기울이기, 하이라이트 등의 서식 기능은 이미 제공되고
              있습니다. 편집 화면에서 키보드 바로 위에 서식 도구 모음이
              있습니다. 이 도구 모음을 옆으로 한 번 밀면 서식 옵션이
              나타납니다.
            </p>
            <p>
              PenCake는 서식에{" "}
              <a href="https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4">
                마크다운
              </a>
              을 사용합니다. 현재 지원되는 기능은 굵게, 기울이기, 밑줄,
              취소선, 하이라이트, 제목, 구분선입니다. 글자 색상 서식은 아직
              지원되지 않지만, 추후 추가하는 것을 적극적으로 검토하고
              있습니다.
            </p>
          </>
        ),
      },
      {
        id: "29e9f0f0c29d495799d727d2006cd8ce",
        q: "글 순서를 마음대로 변경할 수 있으면 좋겠습니다.",
        a: (
          <p>
            글 순서를 자유롭게 변경할 수 있는 기능을 추후 반드시 추가할
            계획입니다. 불편하시겠지만 임시 방편으로는, 날짜순 상태에서 각
            글의 날짜를 수정하는 방식으로 글 순서를 임의로 변경하는 방법을
            추천드립니다. 제목순 상태에서 제목 앞에 01, 02 이런 식으로 번호를
            붙이는 방법도 추천드립니다.
          </p>
        ),
      },
    ],
  },
];

export default function FaqKo() {
  return (
    <>
      <TopNav home="/ko/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>도움말</Kicker>
          <h1>자주 묻는 질문</h1>
          <p className="pc-hero-sub">
            내 글의 보안부터 사용법, 프리미엄, 동기화까지 — PenCake를 만든 사람들이 직접 답한 질문들.
          </p>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-faq-contents">
          <nav className="pc-toc" aria-label="FAQ 목차">
            {SECTIONS.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                <span className="pc-faq-toc-num">{s.numeral}</span>
                <span className="pc-toc-label">{s.title}</span>
                <span className="pc-toc-leader" />
                <span className="pc-toc-hint">질문 {s.items.length}개</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ——— Q&A ——— */}
        {SECTIONS.map((s) => (
          <section className="pc-faq-part" key={s.id} aria-label={s.title}>
            <header className="pc-faq-part-head" id={s.id}>
              <div className="pc-kicker-rule" />
              <h2>
                <span className="pc-faq-part-num">{s.numeral}</span> · {s.title}
              </h2>
            </header>
            <div className="pc-faq-list">
              {s.items.map((item) => (
                <details className="pc-faq-item" id={item.id} key={item.id}>
                  <summary>
                    <span className="pc-faq-tri" aria-hidden="true" />
                    <h3>{item.q}</h3>
                  </summary>
                  <div className="pc-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* ——— Contact ——— */}
        <section className="pc-cta">
          <h2>궁금한 점이 해결되었나요?</h2>
          <p className="pc-cta-sub">
            더 궁금한 것이 있으면 편하게 문의해주세요 😀
          </p>
          <div className="pc-actions">
            <a className="pc-btn pc-btn-primary" href="mailto:pencake.app@gmail.com">
              이메일 보내기
            </a>
          </div>
          <p className="pc-platforms">pencake.app@gmail.com</p>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/faq/" lang="ko" />

      <GoogleAnalytics />
      <FaqDeepLinks />
    </>
  );
}
