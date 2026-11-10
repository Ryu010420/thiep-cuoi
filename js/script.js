document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // ELEMENT REFERENCES
  // ==========================================
  const weddingCard = document.getElementById('weddingCard');
  const cardViewport = document.getElementById('cardViewport');

  // Text inputs
  const inputGuestName = document.getElementById('inputGuestName');
  const selectGuestFont = document.getElementById('selectGuestFont');
  const rangeGuestSize = document.getElementById('rangeGuestSize');
  const valGuestSize = document.getElementById('valGuestSize');
  const guestColorPicker = document.getElementById('guestColorPicker');

  const inputHeaderLine = document.getElementById('inputHeaderLine');
  const inputInviteLead = document.getElementById('inputInviteLead');
  const inputVenueTitle = document.getElementById('inputVenueTitle');
  const inputAddress1 = document.getElementById('inputAddress1');
  const inputAddress2 = document.getElementById('inputAddress2');
  const inputHour = document.getElementById('inputHour');
  const inputMinute = document.getElementById('inputMinute');
  const inputDayOfWeek = document.getElementById('inputDayOfWeek');
  const inputDateSolar = document.getElementById('inputDateSolar');
  const inputDateLunar = document.getElementById('inputDateLunar');
  const inputThankYou = document.getElementById('inputThankYou');

  // Card text elements (preview)
  const cardGuestName = document.getElementById('cardGuestName');
  const cardHeaderLine = document.getElementById('cardHeaderLine');
  const cardInviteLead = document.getElementById('cardInviteLead');
  const cardVenueTitle = document.getElementById('cardVenueTitle');
  const cardAddress1 = document.getElementById('cardAddress1');
  const cardAddress2 = document.getElementById('cardAddress2');
  const cardHour = document.getElementById('cardHour');
  const cardMinute = document.getElementById('cardMinute');
  const cardTimePhrase = document.getElementById('cardTimePhrase');
  const cardDayOfWeek = document.getElementById('cardDayOfWeek');
  const cardDateSolarDay = document.getElementById('cardDateSolarDay');
  const cardDateLunar = document.getElementById('cardDateLunar');
  const cardThankYou = document.getElementById('cardThankYou');
  const dateUnderline = document.getElementById('dateUnderline');

  // Photo controls
  const filePhotoInput = document.getElementById('filePhotoInput');
  const photoDropArea = document.getElementById('photoDropArea');
  const btnResetPhoto = document.getElementById('btnResetPhoto');
  const cardCouplePhoto = document.getElementById('cardCouplePhoto');
  const photoFrame = document.getElementById('photoFrame');
  const photoFrameWrapper = document.getElementById('photoFrameWrapper');

  const rangePhotoZoom = document.getElementById('rangePhotoZoom');
  const valPhotoZoom = document.getElementById('valPhotoZoom');
  const rangePhotoX = document.getElementById('rangePhotoX');
  const valPhotoX = document.getElementById('valPhotoX');
  const rangePhotoY = document.getElementById('rangePhotoY');
  const valPhotoY = document.getElementById('valPhotoY');
  const selectPhotoShape = document.getElementById('selectPhotoShape');
  const rangeFrameWidth = document.getElementById('rangeFrameWidth');
  const valFrameWidth = document.getElementById('valFrameWidth');
  const rangeFrameHeight = document.getElementById('rangeFrameHeight');
  const valFrameHeight = document.getElementById('valFrameHeight');

  // Background & Borders
  const bgThemePicker = document.getElementById('bgThemePicker');
  const selectInnerBorder = document.getElementById('selectInnerBorder');
  const cardInnerFrame = document.getElementById('cardInnerFrame');
  const cardTextureBg = document.getElementById('cardTextureBg');

  // Decorative overlays
  const goldLeafTopLeft = document.getElementById('goldLeafTopLeft');
  const goldLeafTopRight = document.getElementById('goldLeafTopRight');
  const goldLeafBottomRight = document.getElementById('goldLeafBottomRight');
  const musubiDoilyLace = document.getElementById('musubiDoilyLace');
  const musubiBaroqueFrameOverlay = document.getElementById('musubiBaroqueFrameOverlay');
  const musubiRingOrnament = document.getElementById('musubiRingOrnament');
  const musubiCraneLeft = document.getElementById('musubiCraneLeft');
  const musubiCraneRight = document.getElementById('musubiCraneRight');
  const musubiLotusFlower = document.getElementById('musubiLotusFlower');
  const musubiFlowerLeft = document.getElementById('musubiFlowerLeft');
  const musubiFlowerRight = document.getElementById('musubiFlowerRight');
  const musubiMonogramWreath = document.getElementById('musubiMonogramWreath');
  const musubiFilmStrip = document.getElementById('musubiFilmStrip');
  const musubiPlaneTrail = document.getElementById('musubiPlaneTrail');
  const musubiTicketStamp = document.getElementById('musubiTicketStamp');
  const musubiCelestialStars = document.getElementById('musubiCelestialStars');
  const musubiModernSongHy = document.getElementById('musubiModernSongHy');

  // Rich decorative accessories & icons (20 templates)
  const musubiBaroqueFlower = document.getElementById('musubiBaroqueFlower');
  const musubiBaroqueCorner = document.getElementById('musubiBaroqueCorner');
  const musubiKoreanVinesLeft = document.getElementById('musubiKoreanVinesLeft');
  const musubiKoreanVinesRight = document.getElementById('musubiKoreanVinesRight');
  const musubiFilmTorn = document.getElementById('musubiFilmTorn');
  const musubiTimelineBar = document.getElementById('musubiTimelineBar');
  const musubiWaxSeal = document.getElementById('musubiWaxSeal');
  const musubiOliveGarland = document.getElementById('musubiOliveGarland');
  const musubiFlowerLineMinimal = document.getElementById('musubiFlowerLineMinimal');
  const musubiVogueBarcode = document.getElementById('musubiVogueBarcode');
  const musubiCelestialMoon = document.getElementById('musubiCelestialMoon');
  const musubiBohoFloral = document.getElementById('musubiBohoFloral');
  const musubiBlushRoseGarland = document.getElementById('musubiBlushRoseGarland');
  const musubiCloudLeft = document.getElementById('musubiCloudLeft');
  const musubiCloudRight = document.getElementById('musubiCloudRight');
  const musubiEmeraldBranchLeft = document.getElementById('musubiEmeraldBranchLeft');
  const musubiEmeraldBranchRight = document.getElementById('musubiEmeraldBranchRight');
  const musubiArtDecoCorners = document.getElementById('musubiArtDecoCorners');
  const musubiSilkRibbon = document.getElementById('musubiSilkRibbon');
  const bpPassengerVal = document.getElementById('bpPassengerVal');

  // Quick template & auto-fit controls
  const selectQuickTemplate = document.getElementById('selectQuickTemplate');
  const btnFitScreen = document.getElementById('btnFitScreen');

  // Date format elements
  const selectDateFormat = document.getElementById('selectDateFormat');
  const dateLineUnderline = document.getElementById('dateLineUnderline');
  const dateEditorialBox = document.getElementById('dateEditorialBox');
  const dateDotsBox = document.getElementById('dateDotsBox');
  const edMonthText = document.getElementById('edMonthText');
  const edDayText = document.getElementById('edDayText');
  const edYearText = document.getElementById('edYearText');
  const dotsDayText = document.getElementById('dotsDayText');
  const dotsMonthText = document.getElementById('dotsMonthText');
  const dotsYearText = document.getElementById('dotsYearText');

  // Single Guest Export Buttons
  const btnSingleDownloadPng = document.getElementById('btnSingleDownloadPng');
  const btnSingleCopyImage = document.getElementById('btnSingleCopyImage');
  const btnSingleDownloadJpg = document.getElementById('btnSingleDownloadJpg');

  // Batch guest elements
  const textareaGuestList = document.getElementById('textareaGuestList');
  const btnUpdateGuestList = document.getElementById('btnUpdateGuestList');
  const btnSampleGuestList = document.getElementById('btnSampleGuestList');
  const btnClearGuestList = document.getElementById('btnClearGuestList');
  const batchCountBadge = document.getElementById('batchCountBadge');
  const batchGuestChipsList = document.getElementById('batchGuestChipsList');
  const btnPrevGuest = document.getElementById('btnPrevGuest');
  const btnNextGuest = document.getElementById('btnNextGuest');
  const labelGuestIndex = document.getElementById('labelGuestIndex');
  const selectQuickGuest = document.getElementById('selectQuickGuest');
  const btnExportAllZip = document.getElementById('btnExportAllZip');

  // Photo hover & drop elements
  const photoDropOverlay = document.getElementById('photoDropOverlay');
  const photoHoverControls = document.getElementById('photoHoverControls');
  const phcBtnUpload = document.getElementById('phcBtnUpload');
  const phcBtnZoomIn = document.getElementById('phcBtnZoomIn');
  const phcBtnZoomOut = document.getElementById('phcBtnZoomOut');
  const phcBtnZoomReset = document.getElementById('phcBtnZoomReset');
  const phcBtnCenter = document.getElementById('phcBtnCenter');

  // Floating text toolbar elements
  const floatingTextToolbar = document.getElementById('floatingTextToolbar');
  const fttBtnSizeDown = document.getElementById('fttBtnSizeDown');
  const fttSizeVal = document.getElementById('fttSizeVal');
  const fttBtnSizeUp = document.getElementById('fttBtnSizeUp');
  const fttBtnBold = document.getElementById('fttBtnBold');
  const fttBtnItalic = document.getElementById('fttBtnItalic');
  const fttColorPicker = document.getElementById('fttColorPicker');
  const fttBtnClose = document.getElementById('fttBtnClose');

  // Zoom controls
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');
  const labelZoomVal = document.getElementById('labelZoomVal');

  // Action Buttons
  const btnDownloadPng = document.getElementById('btnDownloadPng');
  const btnDownloadJpg = document.getElementById('btnDownloadJpg');
  const btnCopyImage = document.getElementById('btnCopyImage');

  // Modal & Toast
  const batchModal = document.getElementById('batchModal');
  const modalProgressBar = document.getElementById('modalProgressBar');
  const modalStatusText = document.getElementById('modalStatusText');
  const toastMessage = document.getElementById('toastMessage');
  const toastText = document.getElementById('toastText');
  const toastIcon = document.getElementById('toastIcon');

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  let currentGuestColor = '#c94c3d';
  let photoZoom = 100;
  let photoX = 0;
  let photoY = 0;
  let previewScale = 1.0;
  const defaultPhotoSrc = 'assets/sample_couple.jpg';
  let currentTheme = 'theme-musubi-happy-flowers';

  let guestList = [
    'bạn Hiệp và người thương',
    'Anh Tuấn và người thương',
    'Chị Lan và người thương',
    'Gia đình Bác Hùng',
    'Bạn thân Hoàng Nam'
  ];
  let currentGuestIndex = 0;

  // Initialize textarea guest list
  if (textareaGuestList) textareaGuestList.value = guestList.join('\n');
  updateQuickGuestSelect();

  // ==========================================
  // TABS SWITCHING
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // ==========================================
  // CATEGORY FILTER PILLS
  // ==========================================
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');
      document.querySelectorAll('.template-card').forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================
  // DATE FORMAT SWITCHER & PARSER
  // ==========================================
  function updateDateDisplays(dateStr) {
    if (!dateStr) return;
    const match = dateStr.match(/(\d{1,2})[\.\/\-](\d{1,2})[\.\/\-](\d{4})/);
    if (match) {
      const day = match[1];
      const month = match[2];
      const year = match[3];
      if (cardDateSolarDay) cardDateSolarDay.textContent = dateStr;
      if (edMonthText) edMonthText.textContent = `THÁNG ${month}`;
      if (edDayText) edDayText.textContent = day;
      if (edYearText) edYearText.textContent = `NĂM ${year}`;
      if (dotsDayText) dotsDayText.textContent = day;
      if (dotsMonthText) dotsMonthText.textContent = month;
      if (dotsYearText) dotsYearText.textContent = year;
    } else {
      if (cardDateSolarDay) cardDateSolarDay.textContent = dateStr;
    }
  }

  function setDateFormat(mode) {
    if (selectDateFormat) selectDateFormat.value = mode;
    if (dateLineUnderline) dateLineUnderline.style.display = (mode === 'underline') ? 'flex' : 'none';
    if (dateEditorialBox) dateEditorialBox.style.display = (mode === 'editorial') ? 'flex' : 'none';
    if (dateDotsBox) dateDotsBox.style.display = (mode === 'dots') ? 'flex' : 'none';
  }

  if (selectDateFormat) {
    selectDateFormat.addEventListener('change', () => {
      setDateFormat(selectDateFormat.value);
    });
  }

  // ==========================================
  // TEMPLATES SELECTION LOGIC (20 LUXURY STYLES)
  // ==========================================
  const templateCards = document.querySelectorAll('.template-card');
  templateCards.forEach(card => {
    card.addEventListener('click', () => {
      templateCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const theme = card.getAttribute('data-theme');
      if (selectQuickTemplate) selectQuickTemplate.value = theme;
      applyTheme(theme, true);
    });
  });

  // Initialize Quick Template dropdown in Toolbar
  function initQuickTemplateSelect() {
    if (!selectQuickTemplate) return;
    selectQuickTemplate.innerHTML = '';
    templateCards.forEach(card => {
      const theme = card.getAttribute('data-theme');
      const title = card.querySelector('.template-title')?.textContent || theme;
      const opt = document.createElement('option');
      opt.value = theme;
      opt.textContent = title;
      selectQuickTemplate.appendChild(opt);
    });
    selectQuickTemplate.value = currentTheme;
    selectQuickTemplate.addEventListener('change', () => {
      const theme = selectQuickTemplate.value;
      templateCards.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-theme') === theme);
      });
      applyTheme(theme, true);
    });
  }

  // Auto-fit function so card is always 100% visible on any screen (Desktop & Mobile)
  function fitCardToViewport() {
    if (!cardViewport || !weddingCard || document.body.classList.contains('preview-only')) return;
    const isMobile = window.innerWidth <= 900;
    const previewArea = document.querySelector('.preview-area');
    const previewToolbar = document.querySelector('.preview-toolbar');

    let availableWidth = 0;
    let availableHeight = 0;

    if (isMobile && previewArea) {
      const pRect = previewArea.getBoundingClientRect();
      const tbHeight = previewToolbar ? previewToolbar.offsetHeight : 34;
      availableWidth = pRect.width - 24;
      availableHeight = pRect.height - tbHeight - 20;
    } else {
      availableWidth = cardViewport.clientWidth - 40;
      availableHeight = cardViewport.clientHeight - 40;
    }

    const cardWidth = 500;
    const cardHeight = 830;
    if (availableWidth > 40 && availableHeight > 40) {
      const scaleX = availableWidth / cardWidth;
      const scaleY = availableHeight / cardHeight;
      const scale = Math.min(scaleX, scaleY, 1.0);
      previewScale = Math.max(0.20, Math.min(1.2, Math.round(scale * 100) / 100));
      updateViewportZoom();
    }
  }

  if (btnFitScreen) {
    btnFitScreen.addEventListener('click', fitCardToViewport);
  }

  function applyTheme(theme, isUserAction = false) {
    currentTheme = theme;
    weddingCard.className = `invitation-card ${theme}`;
    if (selectQuickTemplate) selectQuickTemplate.value = theme;

    // Reset all overlay decorations
    if (cardTextureBg) cardTextureBg.style.display = 'none';
    if (musubiDoilyLace) musubiDoilyLace.style.display = 'none';
    if (musubiBaroqueFrameOverlay) musubiBaroqueFrameOverlay.style.display = 'none';
    if (musubiBaroqueFlower) musubiBaroqueFlower.style.display = 'none';
    if (musubiBaroqueCorner) musubiBaroqueCorner.style.display = 'none';
    if (musubiRingOrnament) musubiRingOrnament.style.display = 'none';
    if (musubiCraneLeft) musubiCraneLeft.style.display = 'none';
    if (musubiCraneRight) musubiCraneRight.style.display = 'none';
    if (musubiLotusFlower) musubiLotusFlower.style.display = 'none';
    if (musubiFlowerLeft) musubiFlowerLeft.style.display = 'none';
    if (musubiFlowerRight) musubiFlowerRight.style.display = 'none';
    if (musubiMonogramWreath) musubiMonogramWreath.style.display = 'none';
    if (musubiFilmStrip) musubiFilmStrip.style.display = 'none';
    if (musubiFilmTorn) musubiFilmTorn.style.display = 'none';
    if (musubiTimelineBar) musubiTimelineBar.style.display = 'none';
    if (musubiPlaneTrail) musubiPlaneTrail.style.display = 'none';
    if (musubiTicketStamp) musubiTicketStamp.style.display = 'none';
    if (musubiWaxSeal) musubiWaxSeal.style.display = 'none';
    if (musubiOliveGarland) musubiOliveGarland.style.display = 'none';
    if (musubiFlowerLineMinimal) musubiFlowerLineMinimal.style.display = 'none';
    if (musubiVogueBarcode) musubiVogueBarcode.style.display = 'none';
    if (musubiCelestialStars) musubiCelestialStars.style.display = 'none';
    if (musubiCelestialMoon) musubiCelestialMoon.style.display = 'none';
    if (musubiBohoFloral) musubiBohoFloral.style.display = 'none';
    if (musubiBlushRoseGarland) musubiBlushRoseGarland.style.display = 'none';
    if (musubiCloudLeft) musubiCloudLeft.style.display = 'none';
    if (musubiCloudRight) musubiCloudRight.style.display = 'none';
    if (musubiEmeraldBranchLeft) musubiEmeraldBranchLeft.style.display = 'none';
    if (musubiEmeraldBranchRight) musubiEmeraldBranchRight.style.display = 'none';
    if (musubiArtDecoCorners) musubiArtDecoCorners.style.display = 'none';
    if (musubiSilkRibbon) musubiSilkRibbon.style.display = 'none';
    if (musubiKoreanVinesLeft) musubiKoreanVinesLeft.style.display = 'none';
    if (musubiKoreanVinesRight) musubiKoreanVinesRight.style.display = 'none';
    if (musubiModernSongHy) musubiModernSongHy.style.display = 'none';
    if (cardInnerFrame) cardInnerFrame.style.display = 'none';
    setGoldLeaves(false);

    if (theme === 'theme-1-royal-arch' || theme === 'theme-musubi-happy-flowers') {
      // Mẫu 1: Vàng Hoàng Gia & Cổng Vòm (Chuẩn Ảnh 2)
      weddingCard.style.backgroundColor = '#faf7f0';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#c94c3d');
      setVenueColor('#c94c3d');
      setGuestFont("'Alex Brush', cursive");
      setGoldLeaves(true);
      if (musubiRingOrnament) musubiRingOrnament.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#2b2520';
      updateAccessoryCards({ 'acc-gold-leaf': true });
      if (isUserAction) showToast('Đã chọn Mẫu 1: Vàng Hoàng Gia & Cổng Vòm (Ảnh 2) ✨');
    }
    else if (theme === 'theme-2-embossed' || theme === 'theme-musubi-embossed') {
      // Mẫu 2: Musubi Giấy Dập Nổi Nâu Be
      weddingCard.style.backgroundColor = '#f7f3ec';
      cardTextureBg.src = 'assets/musubi/giay-dap-noi-nau/paper.webp';
      cardTextureBg.style.display = 'block';
      musubiDoilyLace.style.display = 'block';
      musubiRingOrnament.style.display = 'block';
      if (musubiWaxSeal) musubiWaxSeal.style.display = 'block';
      setPhotoShape('shape-rect', 280, 345);
      setGuestColor('#6a4427');
      setVenueColor('#6a4427');
      setGuestFont("'Pinyon Script', cursive");
      cardInnerFrame.style.display = 'block';
      setDateFormat('editorial');
      if (dateUnderline) dateUnderline.style.background = '#6a4427';
      updateAccessoryCards({ 'acc-doily': true, 'acc-ring': true, 'acc-texture-bg': true });
      if (isUserAction) showToast('Đã chọn Mẫu 2: Musubi Giấy Dập Nổi Nâu Be 📜');
    }
    else if (theme === 'theme-3-baroque' || theme === 'theme-musubi-baroque') {
      // Mẫu 3: Musubi Hoàng Gia Baroque Gold
      weddingCard.style.backgroundColor = '#faf5ea';
      musubiBaroqueFrameOverlay.style.display = 'block';
      if (musubiBaroqueFlower) musubiBaroqueFlower.style.display = 'block';
      if (musubiBaroqueCorner) musubiBaroqueCorner.style.display = 'block';
      setPhotoShape('shape-oval', 275, 345);
      setGuestColor('#8b201a');
      setVenueColor('#8b201a');
      setGuestFont("'Alex Brush', cursive");
      cardInnerFrame.style.display = 'block';
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#8b201a';
      updateAccessoryCards({ 'acc-baroque-frame': true });
      if (isUserAction) showToast('Đã chọn Mẫu 3: Musubi Hoàng Gia Baroque Gold ⚜️');
    }
    else if (theme === 'theme-4-crane-lotus' || theme === 'theme-musubi-crane') {
      // Mẫu 4: Musubi Hạc Sen Cát Tường & Song Hỷ Dát Vàng (Nền Đỏ)
      weddingCard.style.backgroundColor = '#780d14';
      cardTextureBg.src = 'assets/musubi/crane-lotus-red/bg-paper.webp';
      cardTextureBg.style.display = 'block';
      musubiCraneLeft.style.display = 'block';
      musubiCraneRight.style.display = 'block';
      musubiLotusFlower.style.display = 'block';
      if (musubiCloudLeft) musubiCloudLeft.style.display = 'block';
      if (musubiCloudRight) musubiCloudRight.style.display = 'block';
      setPhotoShape('shape-arch', 285, 350);
      setGuestColor('#f9d873');
      setVenueColor('#f9d873');
      setGuestFont("'Charm', cursive");
      cardInnerFrame.style.display = 'block';
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#f9d873';
      updateAccessoryCards({ 'acc-cranes': true, 'acc-lotus': true, 'acc-texture-bg': true });
      if (isUserAction) showToast('Đã chọn Mẫu 4: Musubi Hạc Sen & Song Hỷ Dát Vàng 🦩');
    }
    else if (theme === 'theme-5-love-letter' || theme === 'theme-musubi-love-letter') {
      // Mẫu 5: Musubi Thư Tình Cổ Điển
      weddingCard.style.backgroundColor = '#fcf8f8';
      musubiFlowerLeft.style.display = 'block';
      musubiFlowerRight.style.display = 'block';
      musubiMonogramWreath.style.display = 'block';
      setPhotoShape('shape-arch', 280, 345);
      setGuestColor('#841624');
      setVenueColor('#841624');
      setGuestFont("'Great Vibes', cursive");
      cardInnerFrame.style.display = 'block';
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#841624';
      updateAccessoryCards({ 'acc-love-flowers': true });
      if (isUserAction) showToast('Đã chọn Mẫu 5: Musubi Thư Tình & Hoa Mận Cổ Điển 💌');
    }
    else if (theme === 'theme-6-korean-minimal') {
      // Mẫu 6: Hàn Quốc Tối Giản M1 Modern Sage
      weddingCard.style.backgroundColor = '#f6f8f5';
      if (musubiKoreanVinesLeft) musubiKoreanVinesLeft.style.display = 'block';
      if (musubiKoreanVinesRight) musubiKoreanVinesRight.style.display = 'block';
      cardInnerFrame.style.display = 'none';
      setPhotoShape('shape-rect', 270, 320);
      setGuestColor('#405845');
      setVenueColor('#405845');
      setGuestFont("'Cormorant Garamond', serif");
      setDateFormat('dots');
      if (isUserAction) showToast('Đã chọn Mẫu 6: Hàn Quốc Tối Giản M1 Modern Sage 🌿');
    }
    else if (theme === 'theme-7-cinematic-film') {
      // Mẫu 7: Thước Phim Điện Ảnh 35mm
      weddingCard.style.backgroundColor = '#f8f6f0';
      cardTextureBg.src = 'assets/musubi/film-beige/bg-paper.webp';
      cardTextureBg.style.display = 'block';
      musubiFilmStrip.style.display = 'block';
      if (musubiFilmTorn) musubiFilmTorn.style.display = 'block';
      if (musubiTimelineBar) musubiTimelineBar.style.display = 'flex';
      cardInnerFrame.style.display = 'none';
      setPhotoShape('shape-rect', 380, 255);
      setGuestColor('#3d2b1f');
      setVenueColor('#3d2b1f');
      setGuestFont("'Playfair Display', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 7: Thước Phim Điện Ảnh 35mm 🎞️');
    }
    else if (theme === 'theme-8-love-flight') {
      // Mẫu 8: Chuyến Bay Hạnh Phúc / Boarding Pass
      weddingCard.style.backgroundColor = '#fbf8f2';
      cardInnerFrame.style.display = 'block';
      musubiPlaneTrail.style.display = 'block';
      musubiTicketStamp.style.display = 'block';
      if (musubiWaxSeal) musubiWaxSeal.style.display = 'block';
      setPhotoShape('shape-rect', 270, 310);
      setGuestColor('#99582a');
      setVenueColor('#99582a');
      setGuestFont("'Cinzel', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 8: Chuyến Bay Hạnh Phúc ✈️');
    }
    else if (theme === 'theme-9-sage-botanical') {
      // Mẫu 9: Sage Green Botanical & Cành Ô Liu
      weddingCard.style.backgroundColor = '#f4f7f4';
      cardTextureBg.src = 'assets/musubi/minimalism-green/paper.webp';
      cardTextureBg.style.display = 'block';
      if (musubiOliveGarland) musubiOliveGarland.style.display = 'block';
      if (musubiFlowerLineMinimal) musubiFlowerLineMinimal.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#38523c');
      setVenueColor('#38523c');
      setGuestFont("'Pinyon Script', cursive");
      setDateFormat('dots');
      if (isUserAction) showToast('Đã chọn Mẫu 9: Sage Green Botanical 🍃');
    }
    else if (theme === 'theme-10-vogue-white') {
      // Mẫu 10: Tinh Khôi Pure White Vogue Chic
      weddingCard.style.backgroundColor = '#ffffff';
      if (musubiVogueBarcode) musubiVogueBarcode.style.display = 'flex';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-rect', 420, 285);
      setGuestColor('#151515');
      setVenueColor('#151515');
      setGuestFont("'Cinzel', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 10: Tinh Khôi Pure Vogue ✨');
    }
    else if (theme === 'theme-11-midnight-celestial') {
      // Mẫu 11: Midnight Navy & Ngàn Sao Vàng Kim
      weddingCard.style.backgroundColor = '#0b1324';
      cardInnerFrame.style.display = 'block';
      musubiCelestialStars.style.display = 'block';
      if (musubiCelestialMoon) musubiCelestialMoon.style.display = 'block';
      setPhotoShape('shape-oval', 275, 345);
      setGuestColor('#fae588');
      setVenueColor('#fae588');
      setGuestFont("'Alex Brush', cursive");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 11: Midnight Celestial & Ngàn Sao 🌙⭐');
    }
    else if (theme === 'theme-12-terracotta-sunset') {
      // Mẫu 12: Cam Đất Terracotta Bohemian Sunset
      weddingCard.style.backgroundColor = '#faf4ef';
      if (musubiBohoFloral) musubiBohoFloral.style.display = 'block';
      if (musubiWaxSeal) musubiWaxSeal.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#b35028');
      setVenueColor('#b35028');
      setGuestFont("'Alex Brush', cursive");
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#b35028';
      if (isUserAction) showToast('Đã chọn Mẫu 12: Cam Đất Terracotta Sunset 🌅');
    }
    else if (theme === 'theme-13-contemporary-m7') {
      // Mẫu 13: Đương Đại M7 Art Gallery & Hình Khối
      weddingCard.style.backgroundColor = '#fdfcf9';
      if (musubiRingOrnament) musubiRingOrnament.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-rect', 340, 315);
      setGuestColor('#202020');
      setVenueColor('#202020');
      setGuestFont("'Cormorant Garamond', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 13: Đương Đại M7 Art Gallery 🏛️');
    }
    else if (theme === 'theme-14-blush-glass') {
      // Mẫu 14: Hồng Trà Blush & Kính Mờ Glassmorphism
      weddingCard.style.backgroundColor = '#fcf4f5';
      cardTextureBg.src = 'assets/musubi/minimalism-tea-rose/paper.webp';
      cardTextureBg.style.display = 'block';
      if (musubiBlushRoseGarland) musubiBlushRoseGarland.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#a63a50');
      setVenueColor('#a63a50');
      setGuestFont("'Pinyon Script', cursive");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 14: Hồng Trà Blush & Kính Mờ 🌸');
    }
    else if (theme === 'theme-15-modern-songhy') {
      // Mẫu 15: Song Hỷ Tân Cổ Điển Hiện Đại
      weddingCard.style.backgroundColor = '#85121c';
      cardInnerFrame.style.display = 'block';
      musubiModernSongHy.style.display = 'block';
      if (musubiCloudLeft) musubiCloudLeft.style.display = 'block';
      if (musubiCloudRight) musubiCloudRight.style.display = 'block';
      setPhotoShape('shape-arch', 285, 350);
      setGuestColor('#fad060');
      setVenueColor('#fad060');
      setGuestFont("'Charm', cursive");
      setDateFormat('underline');
      if (dateUnderline) dateUnderline.style.background = '#fad060';
      if (isUserAction) showToast('Đã chọn Mẫu 15: Song Hỷ Tân Cổ Điển Hiện Đại 囍');
    }
    else if (theme === 'theme-16-emerald-royal') {
      // Mẫu 16: Ngọc Lục Bảo Hoàng Gia Emerald & Gold
      weddingCard.style.backgroundColor = '#0b2214';
      if (musubiEmeraldBranchLeft) musubiEmeraldBranchLeft.style.display = 'block';
      if (musubiEmeraldBranchRight) musubiEmeraldBranchRight.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#f3d068');
      setVenueColor('#f3d068');
      setGuestFont("'Cinzel', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 16: Ngọc Lục Bảo Hoàng Gia 👑🍃');
    }
    else if (theme === 'theme-17-wax-seal') {
      // Mẫu 17: Dấu Sáp Niêm Phong Cổ Điển & Giấy Da
      weddingCard.style.backgroundColor = '#f6eedf';
      cardTextureBg.src = 'assets/musubi/giay-dap-noi-nau/paper.webp';
      cardTextureBg.style.display = 'block';
      if (musubiWaxSeal) musubiWaxSeal.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-rect', 280, 340);
      setGuestColor('#8b3224');
      setVenueColor('#8b3224');
      setGuestFont("'Pinyon Script', cursive");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 17: Dấu Sáp Niêm Phong Cổ Điển 📜✉️');
    }
    else if (theme === 'theme-18-gatsby-artdeco') {
      // Mẫu 18: Gatsby Art Deco 1920s Kim Cương & Vàng
      weddingCard.style.backgroundColor = '#121317';
      if (musubiArtDecoCorners) musubiArtDecoCorners.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-rect', 285, 345);
      setGuestColor('#eed07a');
      setVenueColor('#eed07a');
      setGuestFont("'Cinzel', serif");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 18: Gatsby Art Deco 1920s 💎✨');
    }
    else if (theme === 'theme-19-watercolor-eucalyptus') {
      // Mẫu 19: Khuynh Diệp Màu Nước & Vải Lanh
      weddingCard.style.backgroundColor = '#fafbf7';
      cardTextureBg.src = 'assets/musubi/minimalism-green/paper.webp';
      cardTextureBg.style.display = 'block';
      if (musubiKoreanVinesLeft) musubiKoreanVinesLeft.style.display = 'block';
      if (musubiKoreanVinesRight) musubiKoreanVinesRight.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#43664d');
      setVenueColor('#43664d');
      setGuestFont("'Cormorant Garamond', serif");
      setDateFormat('dots');
      if (isUserAction) showToast('Đã chọn Mẫu 19: Khuynh Diệp Màu Nước & Vải Lanh 🌿🎨');
    }
    else if (theme === 'theme-20-burgundy-ribbon') {
      // Mẫu 20: Nhung Đỏ Burgundy & Ruy Băng Lụa
      weddingCard.style.backgroundColor = '#590c15';
      if (musubiSilkRibbon) musubiSilkRibbon.style.display = 'block';
      if (musubiMonogramWreath) musubiMonogramWreath.style.display = 'block';
      cardInnerFrame.style.display = 'block';
      setPhotoShape('shape-arch', 280, 350);
      setGuestColor('#fae588');
      setVenueColor('#fae588');
      setGuestFont("'Alex Brush', cursive");
      setDateFormat('editorial');
      if (isUserAction) showToast('Đã chọn Mẫu 20: Nhung Đỏ Burgundy & Ruy Băng Lụa 🎀🌹');
    }
    if (typeof scheduleSharePrecompute === 'function') {
      scheduleSharePrecompute(300);
    }
  }

  function setGoldLeaves(visible) {
    const disp = visible ? 'block' : 'none';
    if (goldLeafTopLeft) goldLeafTopLeft.style.display = disp;
    if (goldLeafTopRight) goldLeafTopRight.style.display = disp;
    if (goldLeafBottomRight) goldLeafBottomRight.style.display = disp;
  }

  function setPhotoShape(shape, w, h) {
    selectPhotoShape.value = shape;
    photoFrame.className = `photo-frame ${shape}`;
    photoFrameWrapper.className = `photo-frame-wrapper ${shape}`;
    photoFrame.style.width = `${w}px`;
    photoFrame.style.height = `${h}px`;
    rangeFrameWidth.value = w;
    valFrameWidth.textContent = `${w}px`;
    rangeFrameHeight.value = h;
    valFrameHeight.textContent = `${h}px`;
    updatePhotoTransform();
  }

  function setGuestColor(color) {
    currentGuestColor = color;
    cardGuestName.style.color = color;
    if (cardTimePhrase) cardTimePhrase.style.color = color;
  }

  function setVenueColor(color) {
    cardVenueTitle.style.color = color;
  }

  function setGuestFont(font) {
    selectGuestFont.value = font;
    cardGuestName.style.fontFamily = font;
  }

  // ==========================================
  // ACCESSORY TOGGLE CONTROLS (TAB PHỤ KIỆN)
  // ==========================================
  const accessoryCards = document.querySelectorAll('.accessory-card');
  accessoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const acc = card.getAttribute('data-acc');
      const isActive = card.classList.toggle('active');
      card.querySelector('.accessory-badge').textContent = isActive ? '✓' : '✗';

      if (acc === 'acc-gold-leaf') setGoldLeaves(isActive);
      if (acc === 'acc-doily') musubiDoilyLace.style.display = isActive ? 'block' : 'none';
      if (acc === 'acc-baroque-frame') musubiBaroqueFrameOverlay.style.display = isActive ? 'block' : 'none';
      if (acc === 'acc-ring') musubiRingOrnament.style.display = isActive ? 'block' : 'none';
      if (acc === 'acc-cranes') {
        musubiCraneLeft.style.display = isActive ? 'block' : 'none';
        musubiCraneRight.style.display = isActive ? 'block' : 'none';
      }
      if (acc === 'acc-lotus') musubiLotusFlower.style.display = isActive ? 'block' : 'none';
      if (acc === 'acc-texture-bg') cardTextureBg.style.display = isActive ? 'block' : 'none';
      if (acc === 'acc-love-flowers') {
        musubiFlowerLeft.style.display = isActive ? 'block' : 'none';
        musubiFlowerRight.style.display = isActive ? 'block' : 'none';
      }

      showToast(`Đã ${isActive ? 'bật' : 'tắt'} phụ kiện`);
    });
  });

  function updateAccessoryCards(activeMap) {
    accessoryCards.forEach(c => {
      const acc = c.getAttribute('data-acc');
      const isActive = !!activeMap[acc];
      c.classList.toggle('active', isActive);
      c.querySelector('.accessory-badge').textContent = isActive ? '✓' : '✗';
    });
  }

  // ==========================================
  // TWO-WAY DATA BINDING (Form -> Card)
  // ==========================================
  function syncFormToCard() {
    cardGuestName.textContent = inputGuestName.value || 'Quý Khách';
    if (bpPassengerVal) bpPassengerVal.textContent = inputGuestName.value || 'Quý Khách VIP';
    cardHeaderLine.textContent = inputHeaderLine.value;
    cardInviteLead.textContent = inputInviteLead.value;
    cardVenueTitle.textContent = inputVenueTitle.value;
    cardAddress1.textContent = inputAddress1.value;
    cardAddress2.textContent = inputAddress2.value;
    cardHour.textContent = inputHour.value;
    cardMinute.textContent = inputMinute.value;
    cardDayOfWeek.textContent = inputDayOfWeek.value;
    cardDateSolarDay.textContent = inputDateSolar.value;
    cardDateLunar.textContent = inputDateLunar.value;
    cardThankYou.innerHTML = inputThankYou.value.replace(/\n/g, '<br>');
    updateDateDisplays(inputDateSolar.value);
  }

  const inputBindings = [
    [inputGuestName, cardGuestName],
    [inputHeaderLine, cardHeaderLine],
    [inputInviteLead, cardInviteLead],
    [inputVenueTitle, cardVenueTitle],
    [inputAddress1, cardAddress1],
    [inputAddress2, cardAddress2],
    [inputHour, cardHour],
    [inputMinute, cardMinute],
    [inputDayOfWeek, cardDayOfWeek],
    [inputDateSolar, cardDateSolarDay],
    [inputDateLunar, cardDateLunar]
  ];

  inputBindings.forEach(([inputEl, cardEl]) => {
    inputEl.addEventListener('input', () => {
      cardEl.textContent = inputEl.value;
      if (inputEl === inputDateSolar) {
        updateDateDisplays(inputDateSolar.value);
      }
      if (typeof scheduleSharePrecompute === 'function') {
        scheduleSharePrecompute(500);
      }
    });
  });

  inputThankYou.addEventListener('input', () => {
    cardThankYou.innerHTML = inputThankYou.value.replace(/\n/g, '<br>');
    if (typeof scheduleSharePrecompute === 'function') {
      scheduleSharePrecompute(500);
    }
  });

  // Two-way binding: In-card WYSIWYG editing -> Sidebar Form
  inputBindings.forEach(([inputEl, cardEl]) => {
    cardEl.addEventListener('input', () => {
      inputEl.value = cardEl.textContent.trim();
    });
  });

  cardThankYou.addEventListener('input', () => {
    inputThankYou.value = cardThankYou.innerText.trim();
  });

  // Quick Relationship Pills
  document.querySelectorAll('.quick-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const targetId = pill.getAttribute('data-target');
      if (targetId) {
        const targetInput = document.getElementById(targetId);
        if (targetInput) {
          targetInput.value = pill.getAttribute('data-val');
          targetInput.dispatchEvent(new Event('input'));
        }
      } else {
        // Guest Name Prefix/Suffix
        const prefix = pill.getAttribute('data-prefix') || '';
        const suffix = pill.getAttribute('data-suffix') || '';
        let current = inputGuestName.value.trim();
        
        // Strip common prefixes if present
        current = current.replace(/^(bạn|Anh|Chị|Em|Gia đình Bác|Bạn thân)\s*/i, '');
        current = current.replace(/\s*(và người thương|và gia đình)$/i, '');
        if (!current) current = 'Hiệp';

        inputGuestName.value = `${prefix}${current}${suffix}`;
        inputGuestName.dispatchEvent(new Event('input'));
      }
    });
  });

  // Guest Font Picker
  selectGuestFont.addEventListener('change', () => {
    cardGuestName.style.fontFamily = selectGuestFont.value;
  });

  // Guest Font Size Range
  rangeGuestSize.addEventListener('input', () => {
    const sz = rangeGuestSize.value;
    valGuestSize.textContent = `${sz}px`;
    cardGuestName.style.fontSize = `${sz}px`;
  });

  // Guest Color Picker
  guestColorPicker.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      guestColorPicker.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const color = dot.getAttribute('data-color');
      setGuestColor(color);
      setVenueColor(color);
    });
  });

  // Background Color Theme Picker
  bgThemePicker.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      bgThemePicker.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const bg = dot.getAttribute('data-bg');
      weddingCard.style.backgroundColor = bg;
    });
  });

  // Inner Border Toggle
  selectInnerBorder.addEventListener('change', () => {
    cardInnerFrame.style.display = (selectInnerBorder.value === 'border-double') ? 'block' : 'none';
  });

  // ==========================================
  // PHOTO UPLOAD & POSITIONING CONTROLS
  // ==========================================
  // Căn chỉnh ảnh dâu rể theo đúng tỷ lệ thực tế 100%, tập trung khuôn mặt ở vị trí đẹp nhất, tuyệt đối KHÔNG bao giờ bị méo hay cắt mặt
  function updatePhotoTransform() {
    if (!cardCouplePhoto || !photoFrame) return;
    const nw = cardCouplePhoto.naturalWidth || 682;
    const nh = cardCouplePhoto.naturalHeight || 1024;
    const fw = photoFrame.clientWidth || 280;
    const fh = photoFrame.clientHeight || 350;

    const frameRatio = fw / fh;
    const imgRatio = nw / nh;

    let baseW, baseH;
    if (frameRatio > imgRatio) {
      baseW = fw;
      baseH = fw / imgRatio;
    } else {
      baseH = fh;
      baseW = fh * imgRatio;
    }

    // Tâm khuôn mặt của dâu rể nằm ở ~26% chiều cao ảnh tính từ trên xuống
    // Trong khung ảnh (chiều cao fh), vị trí lý tưởng của khuôn mặt là khoảng 36% chiều cao khung
    // (đủ khoảng cách thông thoáng dưới vòm cong / đỉnh khung, không bị cắt tóc hay mặt)
    const faceRatioY = 0.26;
    const targetRatioY = 0.36;
    let anchorTop = (fh * targetRatioY) - (baseH * faceRatioY);
    if (anchorTop > 0) anchorTop = 0;
    if (anchorTop + baseH < fh) anchorTop = fh - baseH;

    const leftPos = (fw - baseW) / 2 + photoX;
    const topPos = anchorTop + photoY;

    cardCouplePhoto.style.width = `${Math.round(baseW)}px`;
    cardCouplePhoto.style.height = `${Math.round(baseH)}px`;
    cardCouplePhoto.style.position = 'absolute';
    cardCouplePhoto.style.left = `${Math.round(leftPos)}px`;
    cardCouplePhoto.style.top = `${Math.round(topPos)}px`;
    cardCouplePhoto.style.maxWidth = 'none';
    cardCouplePhoto.style.maxHeight = 'none';
    cardCouplePhoto.style.transformOrigin = 'center 26%';
    cardCouplePhoto.style.transform = `scale(${photoZoom / 100})`;

    if (typeof scheduleSharePrecompute === 'function') {
      scheduleSharePrecompute(400);
    }
  }

  cardCouplePhoto.addEventListener('load', updatePhotoTransform);
  window.addEventListener('resize', updatePhotoTransform);

  rangePhotoZoom.addEventListener('input', () => {
    photoZoom = parseInt(rangePhotoZoom.value, 10);
    valPhotoZoom.textContent = `${photoZoom}%`;
    updatePhotoTransform();
  });

  rangePhotoX.addEventListener('input', () => {
    photoX = parseInt(rangePhotoX.value, 10);
    valPhotoX.textContent = `${photoX}px`;
    updatePhotoTransform();
  });

  rangePhotoY.addEventListener('input', () => {
    photoY = parseInt(rangePhotoY.value, 10);
    valPhotoY.textContent = `${photoY}px`;
    updatePhotoTransform();
  });

  selectPhotoShape.addEventListener('change', () => {
    const shape = selectPhotoShape.value;
    photoFrame.className = `photo-frame ${shape}`;
    photoFrameWrapper.className = `photo-frame-wrapper ${shape}`;
    updatePhotoTransform();
  });

  rangeFrameWidth.addEventListener('input', () => {
    const w = rangeFrameWidth.value;
    valFrameWidth.textContent = `${w}px`;
    photoFrame.style.width = `${w}px`;
    updatePhotoTransform();
  });

  rangeFrameHeight.addEventListener('input', () => {
    const h = rangeFrameHeight.value;
    valFrameHeight.textContent = `${h}px`;
    photoFrame.style.height = `${h}px`;
    updatePhotoTransform();
  });

  // 1. Direct Mouse Drag-to-Pan on Photo Frame
  let isDraggingPhoto = false;
  let startMouseX = 0;
  let startMouseY = 0;
  let initialPhotoX = 0;
  let initialPhotoY = 0;

  photoFrame.addEventListener('mousedown', (e) => {
    // Ignore clicks on hover control buttons
    if (e.target.closest('.photo-hover-controls')) return;
    isDraggingPhoto = true;
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    initialPhotoX = photoX;
    initialPhotoY = photoY;
    photoFrame.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingPhoto) return;
    const dx = e.clientX - startMouseX;
    const dy = e.clientY - startMouseY;
    photoX = Math.min(Math.max(initialPhotoX + dx, -180), 180);
    photoY = Math.min(Math.max(initialPhotoY + dy, -180), 180);

    rangePhotoX.value = photoX;
    valPhotoX.textContent = `${photoX}px`;
    rangePhotoY.value = photoY;
    valPhotoY.textContent = `${photoY}px`;
    updatePhotoTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingPhoto) {
      isDraggingPhoto = false;
      photoFrame.style.cursor = 'grab';
    }
  });

  // Mobile Touch Pan on Photo Frame
  photoFrame.addEventListener('touchstart', (e) => {
    if (e.target.closest('.photo-hover-controls')) return;
    if (e.touches && e.touches.length === 1) {
      isDraggingPhoto = true;
      startMouseX = e.touches[0].clientX;
      startMouseY = e.touches[0].clientY;
      initialPhotoX = photoX;
      initialPhotoY = photoY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDraggingPhoto || !e.touches || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startMouseX;
    const dy = e.touches[0].clientY - startMouseY;
    photoX = Math.min(Math.max(initialPhotoX + dx, -180), 180);
    photoY = Math.min(Math.max(initialPhotoY + dy, -180), 180);

    rangePhotoX.value = photoX;
    valPhotoX.textContent = `${photoX}px`;
    rangePhotoY.value = photoY;
    valPhotoY.textContent = `${photoY}px`;
    updatePhotoTransform();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDraggingPhoto = false;
  });

  // 2. Direct Mouse Wheel Zoom on Photo Frame
  photoFrame.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 6 : -6;
    photoZoom = Math.min(Math.max(photoZoom + delta, 30), 300);
    rangePhotoZoom.value = photoZoom;
    valPhotoZoom.textContent = `${photoZoom}%`;
    updatePhotoTransform();
  }, { passive: false });

  // 3. Hover Photo Action Buttons
  if (phcBtnUpload) phcBtnUpload.addEventListener('click', (e) => {
    e.stopPropagation();
    filePhotoInput.click();
  });
  if (phcBtnZoomIn) phcBtnZoomIn.addEventListener('click', (e) => {
    e.stopPropagation();
    photoZoom = Math.min(photoZoom + 10, 300);
    rangePhotoZoom.value = photoZoom;
    valPhotoZoom.textContent = `${photoZoom}%`;
    updatePhotoTransform();
  });
  if (phcBtnZoomOut) phcBtnZoomOut.addEventListener('click', (e) => {
    e.stopPropagation();
    photoZoom = Math.max(photoZoom - 10, 30);
    rangePhotoZoom.value = photoZoom;
    valPhotoZoom.textContent = `${photoZoom}%`;
    updatePhotoTransform();
  });
  if (phcBtnZoomReset) phcBtnZoomReset.addEventListener('click', (e) => {
    e.stopPropagation();
    photoZoom = 100;
    rangePhotoZoom.value = 100;
    valPhotoZoom.textContent = '100%';
    updatePhotoTransform();
    showToast('Đã đặt lại zoom ảnh 100% 🔍');
  });
  if (phcBtnCenter) phcBtnCenter.addEventListener('click', (e) => {
    e.stopPropagation();
    photoX = 0;
    photoY = 0;
    rangePhotoX.value = 0;
    valPhotoX.textContent = '0px';
    rangePhotoY.value = 0;
    valPhotoY.textContent = '0px';
    updatePhotoTransform();
    showToast('Đã căn giữa lại ảnh cưới 📐');
  });

  // 4. Drag & Drop File Directly Onto Photo Frame or Wedding Card
  const dropTargets = [photoFrame, photoFrameWrapper, photoDropArea, weddingCard];
  dropTargets.forEach(target => {
    if (!target) return;
    target.addEventListener('dragover', (e) => {
      e.preventDefault();
      photoFrame.classList.add('drag-over');
    });
    target.addEventListener('dragleave', (e) => {
      if (!photoFrame.contains(e.relatedTarget)) {
        photoFrame.classList.remove('drag-over');
      }
    });
    target.addEventListener('drop', (e) => {
      e.preventDefault();
      photoFrame.classList.remove('drag-over');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          handleUploadedFile(file);
        } else {
          showToast('Vui lòng kéo file ảnh (JPG, PNG, WEBP)!', '⚠️');
        }
      }
    });
  });

  photoDropArea.addEventListener('click', () => filePhotoInput.click());

  filePhotoInput.addEventListener('change', () => {
    if (filePhotoInput.files && filePhotoInput.files[0]) {
      handleUploadedFile(filePhotoInput.files[0]);
    }
  });

  function handleUploadedFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      cardCouplePhoto.src = e.target.result;
      photoZoom = 100;
      photoX = 0;
      photoY = 0;
      rangePhotoZoom.value = 100;
      valPhotoZoom.textContent = '100%';
      rangePhotoX.value = 0;
      valPhotoX.textContent = '0px';
      rangePhotoY.value = 0;
      valPhotoY.textContent = '0px';
      updatePhotoTransform();
      showToast('Đã thay ảnh cưới mới thành công! 📸✨');
    };
    reader.readAsDataURL(file);
  }

  btnResetPhoto.addEventListener('click', () => {
    cardCouplePhoto.src = defaultPhotoSrc;
    photoZoom = 100;
    photoX = 0;
    photoY = 0;
    rangePhotoZoom.value = 100;
    valPhotoZoom.textContent = '100%';
    rangePhotoX.value = 0;
    valPhotoX.textContent = '0px';
    rangePhotoY.value = 0;
    valPhotoY.textContent = '0px';
    updatePhotoTransform();
    showToast('Đã đặt lại ảnh cưới mặc định 💍');
  });

  // ==========================================
  // INLINE TEXT EDITING & FLOATING TOOLBAR
  // ==========================================
  let activeEditableElement = null;

  function showFloatingToolbar(el) {
    if (!el || !floatingTextToolbar) return;
    activeEditableElement = el;

    // Read current computed font-size
    const computed = window.getComputedStyle(el);
    const currentSize = parseInt(computed.fontSize, 10) || 16;
    if (fttSizeVal) fttSizeVal.textContent = `${currentSize}px`;

    // Calculate position: mobile docks at bottom, desktop floats above text
    if (window.innerWidth <= 900) {
      floatingTextToolbar.style.top = 'auto';
      floatingTextToolbar.style.bottom = '10px';
      floatingTextToolbar.style.left = '8px';
      floatingTextToolbar.style.right = '8px';
      floatingTextToolbar.style.width = 'calc(100vw - 16px)';
    } else {
      const rect = el.getBoundingClientRect();
      const tbHeight = 44;
      let top = rect.top - tbHeight - 10;
      if (top < 70) top = rect.bottom + 10; // below if top edge overflow
      let left = rect.left + (rect.width / 2) - 170;
      left = Math.max(12, Math.min(left, window.innerWidth - 360));

      floatingTextToolbar.style.top = `${top}px`;
      floatingTextToolbar.style.bottom = 'auto';
      floatingTextToolbar.style.left = `${left}px`;
      floatingTextToolbar.style.right = 'auto';
      floatingTextToolbar.style.width = 'auto';
    }

    floatingTextToolbar.classList.add('active');
  }

  function hideFloatingToolbar() {
    if (floatingTextToolbar) floatingTextToolbar.classList.remove('active');
    activeEditableElement = null;
  }

  // Listen for click/focus on any contenteditable element inside weddingCard
  document.addEventListener('focusin', (e) => {
    const editable = e.target.closest('[contenteditable="true"]');
    if (editable && weddingCard.contains(editable)) {
      showFloatingToolbar(editable);
    }
  });

  document.addEventListener('click', (e) => {
    const editable = e.target.closest('[contenteditable="true"]');
    const inToolbar = e.target.closest('#floatingTextToolbar');
    if (editable && weddingCard.contains(editable)) {
      showFloatingToolbar(editable);
    } else if (!inToolbar && !editable) {
      hideFloatingToolbar();
    }
  });

  // Font Size Up (A+)
  if (fttBtnSizeUp) {
    fttBtnSizeUp.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeEditableElement) return;
      const computed = window.getComputedStyle(activeEditableElement);
      const currentSize = parseInt(computed.fontSize, 10) || 16;
      const newSize = Math.min(currentSize + 2, 72);
      activeEditableElement.style.fontSize = `${newSize}px`;
      if (fttSizeVal) fttSizeVal.textContent = `${newSize}px`;

      // If active element is guest name, sync sidebar slider
      if (activeEditableElement === cardGuestName && rangeGuestSize) {
        rangeGuestSize.value = newSize;
        if (valGuestSize) valGuestSize.textContent = `${newSize}px`;
      }
    });
  }

  // Font Size Down (A-)
  if (fttBtnSizeDown) {
    fttBtnSizeDown.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeEditableElement) return;
      const computed = window.getComputedStyle(activeEditableElement);
      const currentSize = parseInt(computed.fontSize, 10) || 16;
      const newSize = Math.max(currentSize - 2, 10);
      activeEditableElement.style.fontSize = `${newSize}px`;
      if (fttSizeVal) fttSizeVal.textContent = `${newSize}px`;

      if (activeEditableElement === cardGuestName && rangeGuestSize) {
        rangeGuestSize.value = newSize;
        if (valGuestSize) valGuestSize.textContent = `${newSize}px`;
      }
    });
  }

  // Bold Toggle
  if (fttBtnBold) {
    fttBtnBold.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeEditableElement) return;
      const weight = window.getComputedStyle(activeEditableElement).fontWeight;
      const isBold = weight === 'bold' || parseInt(weight, 10) >= 700;
      activeEditableElement.style.fontWeight = isBold ? '400' : '700';
    });
  }

  // Italic Toggle
  if (fttBtnItalic) {
    fttBtnItalic.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeEditableElement) return;
      const style = window.getComputedStyle(activeEditableElement).fontStyle;
      activeEditableElement.style.fontStyle = (style === 'italic') ? 'normal' : 'italic';
    });
  }

  // Color selection on toolbar
  document.querySelectorAll('.ftt-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeEditableElement) return;
      document.querySelectorAll('.ftt-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const color = dot.getAttribute('data-color');
      activeEditableElement.style.color = color;

      if (activeEditableElement === cardGuestName) {
        setGuestColor(color);
      } else if (activeEditableElement === cardVenueTitle) {
        setVenueColor(color);
      }
    });
  });

  if (fttColorPicker) {
    fttColorPicker.addEventListener('input', (e) => {
      if (!activeEditableElement) return;
      const color = fttColorPicker.value;
      activeEditableElement.style.color = color;
      if (activeEditableElement === cardGuestName) {
        setGuestColor(color);
      } else if (activeEditableElement === cardVenueTitle) {
        setVenueColor(color);
      }
    });
  }

  if (fttBtnClose) {
    fttBtnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      hideFloatingToolbar();
    });
  }

  // ==========================================
  // SMART BATCH GUEST PARSER (NEWLINE & COMMAS)
  // ==========================================
  function parseGuestList(text) {
    if (!text) return [];
    // Split by newline OR comma OR semicolon
    return text
      .split(/[\n,;]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }

  function renderGuestChips() {
    if (!batchGuestChipsList) return;
    batchGuestChipsList.innerHTML = '';
    guestList.forEach((name, idx) => {
      const chip = document.createElement('div');
      chip.className = `batch-chip ${idx === currentGuestIndex ? 'active' : ''}`;
      chip.setAttribute('data-idx', idx);
      chip.innerHTML = `<span class="batch-chip-num">#${idx + 1}</span> ${name}`;
      chip.addEventListener('click', () => {
        currentGuestIndex = idx;
        applyCurrentGuest();
        renderGuestChips();
        showToast(`Đang hiển thị thiệp cho: ${name} 👥`);
      });
      batchGuestChipsList.appendChild(chip);
    });
  }

  function refreshGuestData(names, notify = false) {
    if (!names || names.length === 0) return;
    guestList = names;
    if (currentGuestIndex >= guestList.length) currentGuestIndex = 0;
    if (batchCountBadge) batchCountBadge.textContent = `${guestList.length} Khách Mời`;
    updateQuickGuestSelect();
    renderGuestChips();
    applyCurrentGuest();
    if (notify) showToast(`Đã nhận diện thành công ${guestList.length} khách mời! 👥✨`);
  }

  // Real-time parsing as user types or pastes into textarea
  if (textareaGuestList) {
    textareaGuestList.addEventListener('input', () => {
      const parsed = parseGuestList(textareaGuestList.value);
      if (parsed.length > 0) {
        guestList = parsed;
        if (currentGuestIndex >= guestList.length) currentGuestIndex = 0;
        if (batchCountBadge) batchCountBadge.textContent = `${guestList.length} Khách Mời`;
        updateQuickGuestSelect();
        renderGuestChips();
        applyCurrentGuest();
      } else if (batchCountBadge) {
        batchCountBadge.textContent = `0 Khách Mời`;
      }
    });
  }

  if (btnUpdateGuestList) {
    btnUpdateGuestList.addEventListener('click', () => {
      const parsed = parseGuestList(textareaGuestList.value);
      if (parsed.length === 0) {
        alert('Vui lòng nhập ít nhất 1 tên khách mời (xuống dòng hoặc phân cách bằng dấu phẩy)!');
        return;
      }
      refreshGuestData(parsed, true);
    });
  }

  if (btnSampleGuestList) {
    btnSampleGuestList.addEventListener('click', () => {
      const sample = `bạn Hiệp và người thương, Anh Tuấn & Chị Mai\nGia đình Bác Hùng, Bạn thân Hoàng Nam, Em Hương & Gia đình`;
      textareaGuestList.value = sample;
      refreshGuestData(parseGuestList(sample), true);
    });
  }

  if (btnClearGuestList) {
    btnClearGuestList.addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn xóa trắng danh sách khách mời?')) {
        textareaGuestList.value = '';
        refreshGuestData(['Quý Khách']);
        showToast('Đã xóa trắng danh sách khách mời');
      }
    });
  }

  function updateQuickGuestSelect() {
    if (!selectQuickGuest) return;
    selectQuickGuest.innerHTML = '';
    guestList.forEach((name, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${idx + 1}. ${name}`;
      selectQuickGuest.appendChild(opt);
    });
    if (labelGuestIndex) labelGuestIndex.textContent = `${currentGuestIndex + 1} / ${guestList.length}`;
  }

  function applyCurrentGuest() {
    if (guestList.length === 0) return;
    const name = guestList[currentGuestIndex];
    if (inputGuestName) inputGuestName.value = name;
    if (cardGuestName) cardGuestName.textContent = name;
    if (bpPassengerVal) bpPassengerVal.textContent = name;
    if (labelGuestIndex) labelGuestIndex.textContent = `${currentGuestIndex + 1} / ${guestList.length}`;
    if (selectQuickGuest) selectQuickGuest.value = currentGuestIndex;
    renderGuestChips();
    if (typeof scheduleSharePrecompute === 'function') {
      scheduleSharePrecompute(300);
    }
  }

  if (btnPrevGuest) {
    btnPrevGuest.addEventListener('click', () => {
      if (guestList.length === 0) return;
      currentGuestIndex = (currentGuestIndex - 1 + guestList.length) % guestList.length;
      applyCurrentGuest();
    });
  }

  if (btnNextGuest) {
    btnNextGuest.addEventListener('click', () => {
      if (guestList.length === 0) return;
      currentGuestIndex = (currentGuestIndex + 1) % guestList.length;
      applyCurrentGuest();
    });
  }

  if (selectQuickGuest) {
    selectQuickGuest.addEventListener('change', () => {
      currentGuestIndex = parseInt(selectQuickGuest.value, 10);
      applyCurrentGuest();
    });
  }

  // ==========================================
  // VIEWPORT ZOOM CONTROLS
  // ==========================================
  function updateViewportZoom() {
    weddingCard.style.transform = `translateX(-50%) scale(${previewScale})`;
    labelZoomVal.textContent = `${Math.round(previewScale * 100)}%`;
  }

  btnZoomIn.addEventListener('click', () => {
    if (previewScale < 1.6) {
      previewScale += 0.1;
      updateViewportZoom();
    }
  });

  btnZoomOut.addEventListener('click', () => {
    if (previewScale > 0.3) {
      previewScale -= 0.1;
      updateViewportZoom();
    }
  });

  btnZoomReset.addEventListener('click', () => {
    previewScale = 1.0;
    updateViewportZoom();
  });

  // ==========================================
  // EXPORT FUNCTIONS: PNG 2K, JPG, CLIPBOARD & ZIP
  // ==========================================
  async function generateCardCanvas(scale = 2.0) {
    try {
      const canvas = await html2canvas(weddingCard, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: (clonedDoc) => {
          const clonedCard = clonedDoc.getElementById('weddingCard');
          if (clonedCard) {
            clonedCard.style.transform = 'none';
            clonedCard.style.position = 'relative';
            clonedCard.style.left = 'auto';
            clonedCard.style.top = 'auto';
          }
        }
      });
      return canvas;
    } catch (err) {
      console.warn('html2canvas onclone failed, fallback to direct transform:', err);
      const originalTransform = weddingCard.style.transform;
      const originalPosition = weddingCard.style.position;
      const originalLeft = weddingCard.style.left;
      const originalTop = weddingCard.style.top;

      weddingCard.style.transform = 'none';
      weddingCard.style.position = 'relative';
      weddingCard.style.left = 'auto';
      weddingCard.style.top = 'auto';

      try {
        const canvas = await html2canvas(weddingCard, {
          scale: scale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: false
        });
        weddingCard.style.transform = originalTransform;
        weddingCard.style.position = originalPosition;
        weddingCard.style.left = originalLeft;
        weddingCard.style.top = originalTop;
        return canvas;
      } catch (e) {
        weddingCard.style.transform = originalTransform;
        weddingCard.style.position = originalPosition;
        weddingCard.style.left = originalLeft;
        weddingCard.style.top = originalTop;
        throw e;
      }
    }
  }

  // ==========================================
  // PRE-COMPUTED CARD ASSETS FOR INSTANT SHARING (iOS / ANDROID)
  // ==========================================
  let cachedShareFile = null;
  let cachedShareBlob = null;
  let cachedShareDataUrl = null;
  let cachedShareFilename = '';
  let isShareDirty = true;
  let isSharePrecomputing = false;
  let precomputePromise = null;
  let precomputeDebounceTimer = null;

  async function precomputeShareFile() {
    if (isSharePrecomputing) return precomputePromise;
    isSharePrecomputing = true;

    precomputePromise = (async () => {
      try {
        updatePhotoTransform();
        const guestClean = (inputGuestName ? inputGuestName.value : 'Khach_Moi')
          .trim()
          .replace(/[^a-zA-Z0-9\u00C0-\u024F\u1EA0-\u1EF9]/g, '_');
        const filename = `Thiep_Cuoi_${guestClean || 'VIP'}_2K.png`;

        const canvas = await generateCardCanvas(2.0);
        const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
        if (blob) {
          cachedShareBlob = blob;
          cachedShareFilename = filename;
          cachedShareFile = new File([blob], filename, { type: 'image/png' });
          cachedShareDataUrl = canvas.toDataURL('image/png');

          currentSaveFile = cachedShareFile;
          currentSaveBlob = blob;
          currentSaveDataUrl = cachedShareDataUrl;
          currentSaveFilename = filename;

          isShareDirty = false;
        }
      } catch (err) {
        console.warn('Precompute share file error:', err);
      } finally {
        isSharePrecomputing = false;
        precomputePromise = null;
      }
    })();

    return precomputePromise;
  }

  function scheduleSharePrecompute(delay = 350) {
    isShareDirty = true;
    if (precomputeDebounceTimer) clearTimeout(precomputeDebounceTimer);
    precomputeDebounceTimer = setTimeout(() => {
      precomputeShareFile();
    }, delay);
  }

  function downloadBlobDirectly(blob, filename) {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'Thiep_Cuoi_2K.png';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1200);
    showToast('🎉 Đã tải ảnh thiệp cưới 2K về máy thành công!');
  }

  // Universal Image Save / Share Modal Elements (Safety Fallback)
  const imageSaveModal = document.getElementById('imageSaveModal');
  const btnCloseSaveModal = document.getElementById('btnCloseSaveModal');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnModalNativeShare = document.getElementById('btnModalNativeShare');
  const saveModalImg = document.getElementById('saveModalImg');
  const saveModalSubTitle = document.getElementById('saveModalSubTitle');

  let currentSaveFile = null;
  let currentSaveBlob = null;
  let currentSaveDataUrl = null;
  let currentSaveFilename = 'Thiep_Cuoi.png';

  function openImageSaveModal(dataUrl, filename, blob) {
    if (!imageSaveModal || !saveModalImg) return;
    currentSaveDataUrl = dataUrl;
    currentSaveBlob = blob;
    currentSaveFilename = filename || 'Thiep_Cuoi.png';
    currentSaveFile = blob ? new File([blob], currentSaveFilename, { type: 'image/png' }) : null;

    saveModalImg.src = dataUrl;
    if (saveModalSubTitle) {
      saveModalSubTitle.textContent = `${currentSaveFilename} • Chọn "Lưu hình ảnh" để lưu`;
    }
    imageSaveModal.style.display = 'flex';
    void imageSaveModal.offsetWidth;
    imageSaveModal.classList.add('active');
  }

  function closeImageSaveModal() {
    if (imageSaveModal) {
      imageSaveModal.classList.remove('active');
      imageSaveModal.style.display = 'none';
    }
  }

  if (btnCloseSaveModal) btnCloseSaveModal.addEventListener('click', closeImageSaveModal);
  if (btnModalClose) btnModalClose.addEventListener('click', closeImageSaveModal);
  if (imageSaveModal) {
    imageSaveModal.addEventListener('click', (e) => {
      if (e.target === imageSaveModal) closeImageSaveModal();
    });
  }

  // Nút [📤 MỞ MENU LƯU ẢNH / CHIA SẺ (CUỘN CAMERA)] trong modal dự phòng
  if (btnModalNativeShare) {
    btnModalNativeShare.addEventListener('click', async () => {
      if (!currentSaveFile && currentSaveBlob) {
        currentSaveFile = new File([currentSaveBlob], currentSaveFilename, { type: 'image/png' });
      }
      if (currentSaveFile && navigator.canShare && navigator.canShare({ files: [currentSaveFile] })) {
        try {
          await navigator.share({
            files: [currentSaveFile],
            title: 'Thiệp Cưới Musubi VIP',
            text: 'Thiệp cưới: ' + (inputGuestName ? inputGuestName.value : '')
          });
          return;
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn('Native share error:', err);
          }
        }
      } else {
        alert('Để lưu ảnh vào cuộn camera, bạn hãy chạm giữ ngón tay vào tấm ảnh 1-2 giây rồi chọn "Lưu hình ảnh" nhé!');
      }
    });
  }

  // Chạm vào ảnh trong modal kích hoạt share hoặc nhắc nhở
  if (saveModalImg) {
    saveModalImg.addEventListener('click', () => {
      if (btnModalNativeShare) btnModalNativeShare.click();
    });
  }

  // Xuất thiệp PNG 2K & Kích hoạt trực tiếp Share Sheet (Image 2) hoặc Tải về
  async function exportSinglePng() {
    const canUseNativeShare = typeof navigator !== 'undefined' &&
                              navigator.share &&
                              typeof navigator.canShare === 'function';

    // 1. FAST PATH: Đã có sẵn file trong bộ nhớ đệm -> Gọi TRỰC TIẾP trong user gesture!
    // iOS Safari lập tức bật ngay Share Sheet (Ảnh 2) với nút "Lưu hình ảnh", KHÔNG qua modal
    if (!isShareDirty && cachedShareFile) {
      if (canUseNativeShare && navigator.canShare({ files: [cachedShareFile] })) {
        try {
          await navigator.share({
            files: [cachedShareFile],
            title: 'Thiệp Cưới Musubi VIP',
            text: 'Thiệp cưới: ' + (inputGuestName ? inputGuestName.value : '')
          });
          return;
        } catch (err) {
          if (err.name === 'AbortError') return; // Người dùng ấn Đóng/Hủy Share Sheet
          console.warn('Direct native share error:', err);
        }
      } else {
        // Máy tính bàn (Desktop): Tải trực tiếp file ảnh về thư mục Downloads
        downloadBlobDirectly(cachedShareBlob, cachedShareFilename);
        return;
      }
    }

    // 2. Nếu file chưa kịp tạo sẵn (ví dụ vừa sửa đổi xong ấn ngay)
    showToast('⏳ Đang chuẩn bị thiệp cưới 2K siêu nét...');
    if (isSharePrecomputing && precomputePromise) {
      await precomputePromise;
    } else {
      await precomputeShareFile();
    }

    if (cachedShareFile) {
      if (canUseNativeShare && navigator.canShare({ files: [cachedShareFile] })) {
        try {
          await navigator.share({
            files: [cachedShareFile],
            title: 'Thiệp Cưới Musubi VIP',
            text: 'Thiệp cưới: ' + (inputGuestName ? inputGuestName.value : '')
          });
          return;
        } catch (err) {
          if (err.name === 'AbortError') return;
          console.warn('Share error after generation:', err);
          // Dự phòng nếu gesture hết hạn trên thiết bị quá cũ
          openImageSaveModal(cachedShareDataUrl, cachedShareFilename, cachedShareBlob);
          return;
        }
      } else {
        downloadBlobDirectly(cachedShareBlob, cachedShareFilename);
        return;
      }
    }
  }

  // Xuất thiệp JPG
  async function exportSingleJpg() {
    showToast('⏳ Đang xuất file ảnh JPG...');
    try {
      updatePhotoTransform();
      const canvas = await generateCardCanvas(2.0);
      const guestClean = (inputGuestName ? inputGuestName.value : 'Khach_Moi').trim().replace(/[^a-zA-Z0-9\u00C0-\u024F\u1EA0-\u1EF9]/g, '_');
      const filename = `Thiep_Cuoi_${guestClean || 'VIP'}.jpg`;

      const blob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.95));
      const file = new File([blob], filename, { type: 'image/jpeg' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Thiệp Cưới Musubi VIP',
            text: 'Thiệp cưới: ' + (inputGuestName ? inputGuestName.value : '')
          });
          return;
        } catch (err) {
          if (err.name === 'AbortError') return;
        }
      }
      downloadBlobDirectly(blob, filename);
    } catch (err) {
      console.error(err);
      alert('Không thể tạo file ảnh: ' + err.message);
    }
  }

  // Clipboard Copy (Ctrl + V into Zalo/Messenger)
  async function copyCardImage() {
    showToast('Đang sao chép ảnh vào bộ nhớ tạm... ⏳');
    try {
      const canvas = await generateCardCanvas(2.0);
      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert('Không thể tạo blob ảnh!');
          return;
        }
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          showToast('Đã sao chép ảnh! Bạn có thể nhấn Ctrl+V để dán trực tiếp vào Zalo/FB! 📋✨');
        } catch (clipErr) {
          console.warn('Clipboard write failed, fallback to download:', clipErr);
          const link = document.createElement('a');
          link.download = 'Thiep_Cuoi.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          showToast('Trình duyệt chưa cấp quyền clipboard, đã tự động tải ảnh về máy! 💾');
        }
      }, 'image/png');
    } catch (err) {
      console.error(err);
      alert('Không thể sao chép ảnh: ' + err.message);
    }
  }

  if (btnDownloadPng) btnDownloadPng.addEventListener('click', exportSinglePng);
  if (btnSingleDownloadPng) btnSingleDownloadPng.addEventListener('click', exportSinglePng);

  if (btnDownloadJpg) btnDownloadJpg.addEventListener('click', exportSingleJpg);
  if (btnSingleDownloadJpg) btnSingleDownloadJpg.addEventListener('click', exportSingleJpg);

  if (btnCopyImage) btnCopyImage.addEventListener('click', copyCardImage);
  if (btnSingleCopyImage) btnSingleCopyImage.addEventListener('click', copyCardImage);

  // Batch Export All Guests to ZIP
  btnExportAllZip.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') {
      alert('Thư viện nén ZIP chưa sẵn sàng!');
      return;
    }
    if (guestList.length === 0) {
      alert('Danh sách khách mời đang trống!');
      return;
    }

    batchModal.classList.add('active');
    modalProgressBar.style.width = '0%';
    modalStatusText.textContent = `Bắt đầu xuất 0 / ${guestList.length} khách...`;

    const zip = new JSZip();
    const folder = zip.folder("Thiep_Cuoi_Musubi_VIP");

    const originalGuestIndex = currentGuestIndex;

    for (let i = 0; i < guestList.length; i++) {
      currentGuestIndex = i;
      applyCurrentGuest();

      // Short wait for layout update
      await new Promise(r => setTimeout(r, 80));

      modalStatusText.textContent = `Đang kết xuất thiệp (${i + 1}/${guestList.length}): ${guestList[i]}`;
      modalProgressBar.style.width = `${Math.round(((i + 1) / guestList.length) * 100)}%`;

      try {
        const canvas = await generateCardCanvas(2.0);
        const dataUrl = canvas.toDataURL('image/png');
        const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
        const safeName = `${String(i + 1).padStart(2, '0')}_Thiep_Cuoi_${guestList[i].replace(/[^a-zA-Z0-9\u00C0-\u024F\u1EA0-\u1EF9]/g, '_')}.png`;
        folder.file(safeName, base64Data, { base64: true });
      } catch (e) {
        console.error('Error rendering guest:', guestList[i], e);
      }
    }

    modalStatusText.textContent = 'Đang đóng gói file ZIP hoàn chỉnh...';
    const content = await zip.generateAsync({ type: 'blob' });
    const zipFilename = `Danh_Sach_Thiep_Cuoi_Musubi_${guestList.length}_Khach.zip`;
    
    const zipUrl = URL.createObjectURL(content);
    const zipLink = document.createElement('a');
    zipLink.href = zipUrl;
    zipLink.download = zipFilename;
    zipLink.style.display = 'none';
    document.body.appendChild(zipLink);
    zipLink.click();
    setTimeout(() => {
      try { document.body.removeChild(zipLink); } catch (e) {}
      URL.revokeObjectURL(zipUrl);
    }, 5000);

    // Restore original guest index
    currentGuestIndex = originalGuestIndex;
    applyCurrentGuest();

    batchModal.classList.remove('active');
    showToast(`Đã xuất thành công gói ZIP cho ${guestList.length} khách mời! 📦✨`);
  });

  // ==========================================
  // TOAST NOTIFICATION UTILITY
  // ==========================================
  let toastTimer = null;
  function showToast(msg, icon = '✨') {
    if (toastTimer) clearTimeout(toastTimer);
    toastText.textContent = msg;
    toastIcon.textContent = icon;
    toastMessage.classList.add('show');
    toastTimer = setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 3500);
  }

  // ==========================================
  // INITIAL RENDER & URL PARAM SUPPORT
  // ==========================================
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('preview_only') === '1') {
    document.body.classList.add('preview-only');
  }
  const initialTheme = urlParams.get('theme') || 'theme-1-royal-arch';

  templateCards.forEach(card => {
    const cardTheme = card.getAttribute('data-theme');
    if (cardTheme === initialTheme || (initialTheme === 'theme-musubi-happy-flowers' && cardTheme === 'theme-1-royal-arch')) {
      templateCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    }
  });

  initQuickTemplateSelect();
  applyTheme(initialTheme);
  syncFormToCard();

  if (textareaGuestList) {
    refreshGuestData(parseGuestList(textareaGuestList.value));
  }

  const initialTab = urlParams.get('tab');
  if (initialTab) {
    const tabTarget = initialTab.startsWith('tab-') ? initialTab : `tab-${initialTab}`;
    const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabTarget}"]`);
    if (targetBtn) targetBtn.click();
  }

  // ==========================================
  // MOBILE ADAPTIVE VIEW MODES & DRAWER
  // ==========================================
  const btnModePreview = document.getElementById('btnModePreview');
  const btnModeSplit = document.getElementById('btnModeSplit');
  const btnToggleDrawer = document.getElementById('btnToggleDrawer');
  const drawerToggleIcon = document.getElementById('drawerToggleIcon');
  const drawerToggleText = document.getElementById('drawerToggleText');
  const btnMobileOpenEdit = document.getElementById('btnMobileOpenEdit');
  const btnMobileQuickDownload = document.getElementById('btnMobileQuickDownload');

  function setMobileViewMode(mode) {
    document.body.classList.remove('mode-split', 'mode-preview', 'mode-edit', 'drawer-collapsed');
    document.body.classList.add(mode);

    document.querySelectorAll('.m-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    if (drawerToggleIcon && drawerToggleText) {
      drawerToggleIcon.textContent = '🔽';
      drawerToggleText.textContent = 'Thu Gọn';
    }

    setTimeout(() => {
      fitCardToViewport();
    }, 60);
  }

  if (btnModePreview) btnModePreview.addEventListener('click', () => setMobileViewMode('mode-preview'));
  if (btnModeSplit) btnModeSplit.addEventListener('click', () => setMobileViewMode('mode-split'));

  if (btnToggleDrawer) {
    btnToggleDrawer.addEventListener('click', () => {
      const isCollapsed = document.body.classList.toggle('drawer-collapsed');
      if (drawerToggleIcon && drawerToggleText) {
        drawerToggleIcon.textContent = isCollapsed ? '🔼' : '🔽';
        drawerToggleText.textContent = isCollapsed ? 'Mở Rộng' : 'Thu Gọn';
      }
      setTimeout(() => {
        fitCardToViewport();
      }, 60);
    });
  }

  if (btnMobileOpenEdit) {
    btnMobileOpenEdit.addEventListener('click', () => {
      setMobileViewMode('mode-split');
    });
  }

  if (btnMobileQuickDownload) {
    btnMobileQuickDownload.addEventListener('click', () => {
      exportSinglePng();
    });
  }

  // Set default initial view mode on mobile: DIRECTLY OPEN WEDDING CARD PREVIEW
  if (window.innerWidth <= 900) {
    setMobileViewMode('mode-preview');
  }

  const initialMode = urlParams.get('mode');
  if (initialMode && (initialMode === 'preview' || initialMode === 'split')) {
    setMobileViewMode(`mode-${initialMode}`);
  }

  // Auto-fit initial card view so entire invitation is immediately visible without scrolling
  fitCardToViewport();
  setTimeout(fitCardToViewport, 50);
  setTimeout(fitCardToViewport, 200);
  setTimeout(fitCardToViewport, 500);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 900) {
      if (!document.body.classList.contains('mode-split') &&
          !document.body.classList.contains('mode-preview')) {
        setMobileViewMode('mode-preview');
      }
    } else {
      document.body.classList.remove('mode-split', 'mode-preview', 'mode-edit', 'drawer-collapsed');
    }
    fitCardToViewport();
  });

  // Tự động chuẩn bị sẵn file ảnh chất lượng cao 2K ngay khi tải trang
  setTimeout(() => {
    if (typeof scheduleSharePrecompute === 'function') {
      scheduleSharePrecompute(100);
    }
  }, 400);

});
