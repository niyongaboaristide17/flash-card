import { User } from '../models/User';
export const emailTemplate = ({name, password, email}: User) => `    <div class="es-wrapper-color">
<!--[if gte mso 9]>
	<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
		<v:fill type="tile" color="#fafafa"></v:fill>
	</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
	<tbody>
		<tr>
			<td class="esd-email-paddings" valign="top">
				<table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
					<tbody>
						<tr>
							<td class="esd-stripe" align="center">
								<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
									<tbody>
										<tr>
											<td class="esd-structure es-p15t es-p20r es-p20l" align="left">
												<table cellpadding="0" cellspacing="0" width="100%">
													<tbody>
														<tr>
															<td width="560" class="esd-container-frame" align="center" valign="top">
																<table cellpadding="0" cellspacing="0" width="100%">
																	<tbody>
																		<tr>
																			<td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://wouojc.stripocdn.email/content/guids/CABINET_f3fc38cf551f5b08f70308b6252772b8/images/96671618383886503.png" alt style="display: block;" width="100"></a></td>
																		</tr>
																		<tr>
																			<td align="center" class="esd-block-text es-p15t es-p15b es-m-txt-c" esd-links-underline="none">
																				<h1>Thanks for joining us!</h1>
																			</td>
																		</tr>
																		<tr>
																			<td align="left" class="esd-block-text es-p10t es-p10b">
																				<p style="font-size: 16px;">Hello, *|${name}|*! Thanks for joining us! You are now on our mailing list. You will be able to manage your flashcard</p>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td class="esd-structure esdev-adapt-off es-p20" align="left">
												<table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
													<tbody>
														<tr>
															<td class="esdev-mso-td" valign="top">
																<table cellpadding="0" cellspacing="0" class="es-left" align="left">
																	<tbody>
																		<tr class="es-mobile-hidden">
																			<td width="146" class="esd-container-frame" align="left">
																				<table cellpadding="0" cellspacing="0" width="100%">
																					<tbody>
																						<tr>
																							<td align="center" class="esd-block-spacer" height="40"></td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td class="esdev-mso-td" valign="top">
																<table cellpadding="0" cellspacing="0" class="es-left" align="left">
																	<tbody>
																		<tr>
																			<td width="121" class="esd-container-frame" align="left">
																				<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8eafb" style="background-color: #e8eafb; border-radius: 10px 0 0 10px; border-collapse: separate;">
																					<tbody>
																						<tr>
																							<td align="right" class="esd-block-text es-p10t">
																								<p>Login:</p>
																							</td>
																						</tr>
																						<tr>
																							<td align="right" class="esd-block-text es-p10b">
																								<p>Password:</p>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td class="esdev-mso-td" valign="top">
																<table cellpadding="0" cellspacing="0" class="es-left" align="left">
																	<tbody>
																		<tr>
																			<td width="155" align="left" class="esd-container-frame">
																				<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8eafb" style="background-color: #e8eafb; border-radius:0 10px 10px 0; border-collapse: separate;">
																					<tbody>
																						<tr>
																							<td align="left" class="esd-block-text es-p10t es-p10l">
																								<p><strong>${email}</strong></p>
																							</td>
																						</tr>
																						<tr>
																							<td align="left" class="esd-block-text es-p10b es-p10l">
																								<p><strong>${password}</strong></p>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td class="esdev-mso-td" valign="top">
																<table cellpadding="0" cellspacing="0" class="es-right" align="right">
																	<tbody>
																		<tr class="es-mobile-hidden">
																			<td width="138" class="esd-container-frame" align="left">
																				<table cellpadding="0" cellspacing="0" width="100%">
																					<tbody>
																						<tr>
																							<td align="center" class="esd-block-spacer" height="40"></td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td class="esd-structure es-p10b es-p20r es-p20l" align="left">
												<table cellpadding="0" cellspacing="0" width="100%">
													<tbody>
														<tr>
															<td width="560" class="esd-container-frame" align="center" valign="top">
																<table cellpadding="0" cellspacing="0" width="100%" style="border-radius: 5px; border-collapse: separate;">
																	<tbody>
																		<tr>
																			<td align="center" class="esd-block-button es-p10t es-p10b"><span class="es-button-border" style="border-radius: 6px;"><a href class="es-button" target="_blank" style="border-left-width: 30px; border-right-width: 30px; border-radius: 6px;">SHOP NOW</a></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
</div>`